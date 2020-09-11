'use strict';
module.exports = function(app) {
  let controller = require('./src/controller.js');

  app.route('/user').get(controller.searchUser);
  app.route('/videos').get(controller.searchVideo);
  app.route('/vod').get(controller.searchVOD);
  app.route('/vod').post(controller.createVOD);
  app.route('/showcase').get(controller.searchAlbum);
  app.route('/showcase').post(controller.createAlbum);
  app.route('/comment').get(controller.searchComment);
  app.route('/comment').post(controller.createComment);
};