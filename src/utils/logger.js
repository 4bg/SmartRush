var log4js = require('log4js');
var timeFormatter = require('./timeFormatter');
var config = require('../config');

//configuration for log4js
log4js.configure({
  appenders: [
    {type: 'file', filename: '../logs/app' + ' ' + timeFormatter.getFormattedDate() + '.log', category: 'app'},
    {type: 'file', filename: '../logs/wechat-api' + ' ' + timeFormatter.getFormattedDate() + '.log', category: 'wechat-api'}
  ]
});

function getLogger(category) {
  if (!category) {
    category = 'app';
  }
  var logger = log4js.getLogger(category);
  return logger;
}

exports.trace = function(log, category) {
  getLogger(category).trace(log);
};

exports.debug = function(log, category) {
  getLogger(category).debug(log);
};

exports.info = function(log, category) {
  getLogger(category).info(log);
};

exports.warn = function(log, category) {
  getLogger(category).warn(log);
};

exports.error = function(log, category) {
  getLogger(category).error(log);
};

exports.fatal = function(log, category) {
  getLogger(category).fatal(log);
};