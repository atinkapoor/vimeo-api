'use strict'
exports.getData = function (lib, url, callback) {
  let _return = {};
  _return.searchData = lib.request({
    path: url,
    query: {}
  }, function (error, body, statusCode, headers) {
    if(body.data)
      callback(body.data);
    else
      callback(body);
  })
  return _return;
}

exports.addData = function (lib, url, params, callback) {
  let _return = {};
  _return.addData = lib.request({
    path: url,
    query: params,
    method: 'POST'
  }, function (error, body, statusCode, headers) {
    if(body.data)
      callback(body.data);
    else
      callback(body);
  })
  return _return;
}
