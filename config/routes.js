'use strict'
var home = require('./../controllers/HomeController');

module.exports = function(app) {

  app.get('/test', function(req, res) {
    home.sampleAction(req, res);
  });

};
