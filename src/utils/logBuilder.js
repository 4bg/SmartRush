exports.getLogByError = function (err) {
  var log = err.stack + '\n*************************************************************************\n';
  return log;
}

exports.getLogByRequest = function (request) {
  var log = '';
  if (request.method) {
    log += request.method + ' ';
  }

  if (request.url) {
    log += request.url;
  }

  if (request.param) {
    log += '\n[param]\t' + JSON.stringify(request.param);
  }

  if (request.response) {
    log += '\n[response]\t' + JSON.stringify(request.response);
  } else {
    log += '\n[response]\t' + 'No response';
  }

  log += '\n**************************************************************************************************\n';

  return log;
}