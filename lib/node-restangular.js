'use strict';
/* jslint node:true */

global.angular = require('angular');
global._ = require('lodash');
require('restangular');

module.exports = function(callback) {
  global.angular.injector(['ng','restangular']).invoke(callback);
};
