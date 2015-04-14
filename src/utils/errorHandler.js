var log4js = require('log4js');
var logBuilder= require('./logBuilder');
var dateFormatter = require('./timeFormatter');

module.exports = function errorHandler(err, req, res, next) {
  log4js.loadAppender('file');
  var date = new Date()
  var logFile = '../logs/app ' + dateFormatter.getFormattedDate() + '.log';
  log4js.addAppender(log4js.appenders.file(logFile), 'app');
  var logger = log4js.getLogger('app');
  logger.error(logBuilder.getGeneralLog(err));
  res.status(500).send({errMessage: err.message});
}