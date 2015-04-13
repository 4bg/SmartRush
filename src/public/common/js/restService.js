define(['jquery'], function($) {
  function sendAjaxRequest(method, url, params, success, error) {
    //set default error handler
    if (!error && typeof(error) != 'function') {
      var error = function(response) {
        if (response.responseJSON.errMessage) {
          alert(response.responseJSON.errMessage);
        } else {
          alert('服务器异常');
        }
      };
    }

    $.ajax({
      method: method,
      url: url,
      data: JSON.stringify(params),
      contentType: 'application/json',
      success: success,
      error: error
    });
  }
  
  var post = function(url, params, success, error) {
    sendAjaxRequest('POST', url, params, success, error);
  };

  return {
    post: post
  };
})