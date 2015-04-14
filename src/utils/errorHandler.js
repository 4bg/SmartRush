var logBuilder= require('./logBuilder');
var logger = require('./logger');

module.exports = function errorHandler(err, req, res, next) {
  var log = logBuilder.getLogByError(err, 'app');
  logger.error(log);
  res.status(500).send({errMessage: err.message});
}