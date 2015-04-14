exports.getLogByError = function (err) {
  var log = err.stack + '\n*************************************************************************\n';
  return log;
}