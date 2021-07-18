// Copyright (C) 2017 AlphaMiddle, LLC. All Rights Reserved

const _ = require('lodash');
const keystone = require('keystone');
const responseHandler = require('./response-handler');
const uidCookie = require('./uid-cookie');

function formatUser(user) {
  return _.omit(user.toJSON(), 'password')
}

const signin = (req, res) => {
  keystone.session.signin({email: req.body.email, password: req.body.password}, req, res, function () {
    uidCookie.set(req, res);
    responseHandler(res, null, formatUser(req.user));
  }, function (err) {
    responseHandler(res, err);
  });
}

const authenticate = (req, res, next) => {
  if (!req.user) return res.sendStatus(401).end();

  if (req.user._id.toString() !== req.params.id) {
    return res.sendStatus(404).end();
  }

  next();
};

module.exports = { authenticate, signin };
