'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var config = require('./environment');
var path = require('path');

module.exports = function(app) {
  var env = app.get('env');
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  var appPath = path.join(config.root, 'client');
  var bowers = path.join(config.root, 'bower_components');

  app.use(express.static(appPath));
  if (env === 'development') {
    app.use('/bower_components', express.static(bowers));
  }
}
