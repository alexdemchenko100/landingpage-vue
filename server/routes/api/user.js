// Copyright (C) 2017 AlphaMiddle, LLC. All Rights Reserved

const _ = require('lodash');
const crypto = require('crypto');
const fs = require('fs');
const generatePassword = require('generate-password');
const keystone = require('keystone');
const moment = require('moment');
const path = require('path');
const sendgrid = require('@sendgrid/mail');

const responseHandler = require('../../lib/response-handler');
const uidCookie = require('../../lib/uid-cookie');
const { authenticate, signin } = require('../../lib/middleware');
const { skillChoices } = require('../../../src/lib/constants');

sendgrid.setApiKey(process.env.SENDGRID_KEY);

const skillMap = _.keyBy(skillChoices, (s) => s.label);

/**
 * Creates a hash of str with Keystone's cookie secret.
 * Only hashes the first half of the string.
 */
// Note: mimics keystone.session logic (node_modules/keystone/lib/session.js)
function hash (str) {
  // force type
  str = '' + str;
  // get the first half
  str = str.substr(0, Math.round(str.length / 2));
  // hash using sha256
  return crypto
    .createHmac('sha256', keystone.get('cookie secret'))
    .update(str)
    .digest('base64')
    .replace(/\=+$/, '');
}

// extract devcolor payload's university+training data for the given field
function _extractSchoolInfo(field, data) {
  const MAJOR = 'Computer Science';

  if (!data.university) {
    return '';
  }

  if (data.training) {
    // only need first word from training string, since devcolor assumes computer sci/eng
    switch (data.training.toLowerCase().split(' ')[0].replace('\'', '')) {
      case 'bachelors':
        if (field === 'undergradSchoolName') {
          return data.university;
        } else if (field === 'undergradSchoolMajor') {
          return MAJOR;
        }

      case 'masters':
      case 'phd':
      default:
        if (field === 'gradSchoolName') {
          return data.university;
        }
    }
  }

  return '';
}

// extract devcolor payload's string array (e.g. offer_help, get_help) for use in User.model.questions[type=Select]
function _extractSkillChoices(devcolorHelpSet) {
  // todo: handle case when item in set already includes comma (since we use comma as delimiter)
  return !devcolorHelpSet
    ? []
    : devcolorHelpSet
        .split('|')
        .map((e) => _skillValueFromLabel(e))
        .filter((el) => !!el);
}

// assumes strLabel is a label from skillChoices
function _skillValueFromLabel(strLabel) {
  return skillMap[strLabel] ? skillMap[strLabel].value : null;
}

// extract devcolor payload's industry_entrance field into valid option for User.model.questions.yearsExperience
function _extractYearsExperience(devcolorIndustryEntrance) {
  const EXP_LEVEL_0 = 3;
  const EXP_LEVEL_1 = 7;

  if (!devcolorIndustryEntrance) {
    return '';
  }

  const numYears = moment(Date.now()).diff(moment.unix(parseInt(devcolorIndustryEntrance, 10)), 'years');

  // note: return strings map to values in yearsExperienceOptions (keystone/models/user.js)
  if (numYears < 0) {
    return '';
  } else if (numYears < EXP_LEVEL_0) {
    return 'junior';
  } else if (numYears < EXP_LEVEL_1) {
    return 'mid';
  } else {
    return 'senior';
  }
}

module.exports = (app, base) => {
  app.get(base + '/users', (req, res) => res.sendStatus(405).end());

  // user login
  app.get(base + '/users/:id', authenticate);

  app.post(base + '/user/login', [
    (req, res, next) => {
      if (!req.body.email || !req.body.password) {
        return res.status(401).json({error: 'email and password required'});
      }

      next();
    },
    signin
  ]);

  app.post(base + '/user/logout', (req, res) => {
    keystone.session.signout(req, res, function (err) {
      uidCookie.remove(req, res);
      responseHandler(res, err, {});
    });
  });

  app.post(base + '/user/register', [
    (req, res, next) => {
      // TODO - We might also need validation on the backend to ensure no malformed data is entered into the db
      if (!req.body.email || !req.body.password) {
        return res.status(401).json({error: 'email and password required'});
      }
      const User = keystone.list('user');

      new User.model({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        canAccessKeystone: false,
      }).save((err) => {
        if (err) return res.status(500).send(err).end();

        next();
      });
    },
    signin
  ]);

  app.post(base + '/user/devcolor', [
    (req, res, next) => {
      if (!req.body.email) {
        return res.status(401).end('Email address is required');
      }

      // generate a password for the user (send to user via email)
      const userPassword = generatePassword.generate({
        excludeSimilarCharacters: true,
        length: 8,
        numbers: true,
      });

      req.body.password = userPassword;

      const userData = {
        questions: {
          currentStep: 1,
          undergradSchoolName: _extractSchoolInfo('undergradSchoolName', req.body),
          undergradSchoolMajor: _extractSchoolInfo('undergradSchoolMajor', req.body),
          gradSchoolName: _extractSchoolInfo('gradSchoolName', req.body),
          title: req.body.title || '',
          work: req.body.employer || '',
          yearsExperience: _extractYearsExperience(req.body.industry_entrance),
          skills: _extractSkillChoices(req.body.offer_help),
          interests: _extractSkillChoices(req.body.get_help),
        },
      };

      const User = keystone.list('user');

      User.model.findOne({email: req.body.email}).exec((err, user) => {
        // create new user if one was not found
        if (!user || err) {
          new User.model({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            canAccessKeystone: false,
          })
          .save((err, user) => {
            if (err) return res.status(500).send(err).end();

            // Send password to user via Sendgrid
            const dcEmail = fs.readFileSync(path.resolve(__dirname, '../../../lib/email/devcolor_confirmation.html'), 'utf8');
            sendgrid.send({
              to: req.body.email,
              from: 'Authentic Ventures Admin <info@authentic-ventures.com>',
              subject: 'Welcome to Authentic Ventures',
              html: dcEmail.replace('{{password}}', userPassword),
            });

            // Note: requires update in order to write questions.skills|interests w/o validation error
            User.model.update({_id: user._id}, userData, { multi: false }).exec((err, result) => {
              if (err) return res.status(500).send('Update error').end();
              next();
            });
          });
        } else {
          User.model.update(
            { _id: user._id },
            { questions: _.merge(user.questions || {}, userData.questions) },
            { multi: false }
          ).exec((err, result) => {
            if (err) return res.status(500).send('Update error').end();
            req.user = user;
            next();
          });
        }
      });
    },
    (req, res, next) => {
      const url = process.env.NODE_ENV === 'production'
        ? 'https://www.authentic-ventures.com/'
        : 'http://localhost:3000/';

      if (req.user) {
        // TODO: Auth utils
        // Note: mimics keystone.session logic (node_modules/keystone/lib/session.js)
        const user = req.user;
        req.session.regenerate(function () {
          req.user = user;
          req.session.userId = user.id;
          if (keystone.get('cookie signin') && user.password) {
            var userToken = user.id + ':' + hash(user.password);
            var cookieOpts = _.defaults({}, keystone.get('cookie signin options'), {
              signed: true,
              httpOnly: true,
              maxAge: 10 * 24 * 60 * 60,
            });
            res.cookie('keystone.uid', userToken, cookieOpts);
          }

          uidCookie.set(req, res);
          res.redirect(`${url}onboard/1`);
        });
      } else {
        keystone.session.signin({email: req.body.email, password: req.body.password}, req, res, function () {
          uidCookie.set(req, res);
          res.redirect(`${url}onboard/1`);
        }, function (err) {
          res.status(500).send(err).end();
        });
      }
    }
  ]);

  function formatUser(user) {
    return _.omit(user.toJSON(), 'password')
  }
};
