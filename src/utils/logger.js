var log4js = require('log4js');
var timeFormatter = require('./timeFormatter');

function getLogger(category) {
  if (!category) {
    category = 'app';
  }
  log4js.loadAppender('file');
  var logFile = '../logs/' + category + ' ' + timeFormatter.getFormattedDate() + '.log';
  log4js.addAppender(log4js.appenders.file(logFile), category);
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