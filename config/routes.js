'use strict';

var home = require('./../controllers/HomeController');
var user = require('./../controllers/UserAccountController');

module.exports = function(app) {

  app.get('/test', function(req, res) {
    home.sampleAction(req, res);
  });

  app.post('/login', function(req, res) {
      user.LoginAction(req, res);
    });

};
