/* jslint node:true */
'use strict';


// Bring in node-restangular
var restangular = require('../');

// Get a Restangular object
restangular(function(Restangular) {

  // Configure
  Restangular.setBaseUrl('http://vimeo.com/api/v2');

  // Perform a sample call
  Restangular
    .one('channel', 'staffpicks')
    .getList('videos.json')
    .then(function(videos) {
      console.log('VIMEO STAFF PICKS');
      videos.forEach(function(video) {
        console.log(video.title);
      });
    }, function(err) {
      console.log('Error: ' + err.data.errors[0].message);
    });

});
