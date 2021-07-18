require('dotenv').load();
const path = require('path');
const config = require('../config');

module.exports = {
  'name': config.title,
  'favicon': '../public/favicon.ico',
  'mongo': process.env.MONGODB_URI || 'mongodb://localhost:27017/authentic-ventures',
  'updates': path.resolve(__dirname, '../server/keystone/updates'),
  'auto update': true,

  'port': config.port,
  'session': true,
  'session store': 'mongo',
  'signin url': '/user/login',
  'signin redirect': '/onboard',
  'signout url': '/user/logout',
  'signout redirect': '/',
  'auth': true,
  'user model': 'user',
  'cookie secret': '24634sdfhsdfgh346y34',
  'logger options': {
    skip: (req, res) => res.statusCode < 400
  }
};
