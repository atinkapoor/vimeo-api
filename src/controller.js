'use strict';
const Vimeo = require('../index').Vimeo
const config = require('./config.json')
const lib = new Vimeo(config.client_id, config.client_secret)
lib.setAccessToken(config.access_token)

const functions = require('./functions.js');

exports.searchUser = function(req, res) {
  const url = `/users/${config.user_id}`;
  functions.getData(lib, url, function (response) {
    //console.log(response);
    res.json(response);
  });
};

exports.searchVideo = function(req, res) {
  const url = `/users/${config.user_id}/videos`;
  functions.getData(lib, url, function (response) {
    //console.log(response);
    res.json(response);
  });
};

exports.searchVOD = function(req, res) {
  const url = `/users/${config.user_id}/ondemand/pages`;
  functions.getData(lib, url, function (response) {
    //console.log(response);
    res.json(response);
  });
};

exports.createVOD = function(req, res) {
  const url = `/users/${config.user_id}/ondemand/pages`;
  functions.addData(lib, url, req.body, function (response) {
    res.json(response);
  });
};

exports.searchAlbum = function(req, res) {
  const url = `/users/${config.user_id}/albums`;
  functions.getData(lib, url, function (response) {
    res.json(response);
  });
};

exports.createAlbum = function(req, res) {
  const url = `/users/${config.user_id}/albums`;
  functions.addData(lib, url, req.body, function (response) {
    res.json(response);
  });
};

exports.searchComment = function(req, res) {
  const url = `/videos/${req.query.video_id}/comments`;
  functions.getData(lib, url, function (response) {
    res.json(response);
  });
};

exports.createComment = function(req, res) {
  const url = `/videos/${req.body.video_id}/comments`;
  functions.addData(lib, url, req.body, function (response) {
    res.json(response);
  });
};
