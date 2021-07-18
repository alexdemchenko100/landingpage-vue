// Copyright (C) 2017 AlphaMiddle, LLC. All Rights Reserved

const _ = require('lodash');
const keystone = require('keystone');

const responseHandler = require('../../lib/response-handler');
const { authenticate } = require('../../lib/middleware');

module.exports = (app, base) => {
  // keystone DB query
  app.get(base + '/:list/:id?', [
    (req, res, next) => {
      try {
        res.locals.KeystoneList = keystone.list(req.params.list);
        next();
      } catch (e) {
        res.status(404).send('Keystone resource "' + req.params.list + '" does not exist.').end();
      }
    },

    (req, res) => {
      let query;

      if (req.params.id) {
        query = res.locals.KeystoneList.model.findById(req.params.id);
      } else {
        query = res.locals.KeystoneList.model.find();
      }

      query.exec((err, result) => responseHandler(res, err, result));
    }
  ]);

  app.patch(base + '/:list/:id', [
    authenticate,
    (req, res, next) => {
      try {
        res.locals.KeystoneList = keystone.list(req.params.list);
        next();
      } catch (e) {
        res.status(404).send('Keystone resource "' + req.params.list + '" does not exist.').end();
      }
    },
    (req, res, next) => {
      if (!req.params.id) return res.status(404).json({error: 'No id entered'});

      res.locals.KeystoneList.model.findById(req.params.id)
        .exec((err, result) => {
          req.item = result;
          next();
        });
    },
    (req, res) => {
      // TODO - We need to ensure certain fields cant be updated (_id, canAccessKeystone, etc)
      let update = {};
      if (req.body.field) {
        if (req.body.field === '_id') return res.sendStatus(404).end();
        console.log('----------');
        console.log(req.body.data);
        console.log('----------');
        update[req.body.field] = _.isPlainObject(req.body.data) ?
          _.mergeWith(req.item[req.body.field], req.body.data, customizer) : req.body.data;
      } else { // used to update multiple values in a single request
        // disallow if _id is provided
        if (req.body.data['_id']) return res.sendStatus(404).end();

        update = Object.assign(update, req.body.data);
        req.item = _.mergeWith(req.item, req.body.data, customizer);
      }

      // if field wasn't provided in request
      res.locals.KeystoneList.model.update({_id: req.item._id}, update,{
        'multi':false
      }).exec(function(err,result){
        console.log(req.item);
        if (err) return res.sendStatus(404).end();
        return res.status(200).json(formatItem(req.item)); // no reason to make a DB call here
      });
    }
  ]);
};

function customizer(objValue, srcValue) {
  // Update user value with value from req.body
  return srcValue;
}

function formatItem(item) {
  // Remove fields we don't want to pass to the client
  return _.omit(item.toJSON(), 'password')
}
