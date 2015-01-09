'use strict';

var pathToRegexp = require('path-to-regexp');

function getParams(match, keys) {

  var params = {};

  for (var i = 0, len = keys.length ; i < len ; i++) {
    var key = keys[i];
    var param = match[i + 1];
    if (!param) { continue; }
    params[key.name] = decodeURIComponent(param);
    if (key.repeat) {
      params[key.name] = params[key.name].split(key.delimiter);
    }
  }

  return params;
}

function matcher(path) {

  var keys = [];
  var regexp = pathToRegexp(path, keys);

  return function match(path) {
    var match = regexp.exec(path);
    if (!match) {
      return false;
    }
    return getParams(match, keys);
  };
}

module.exports = matcher;