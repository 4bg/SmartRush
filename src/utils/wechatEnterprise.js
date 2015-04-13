config = require('../config');
request = require('request');

function getToken(callback) {
  request.get('https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid='
  + config.corpId + '&corpsecret='
  + config.secret,
  function(error, response, body) {
    if (!error && response.statusCode === 200) {
      token = (JSON.parse(body)).access_token;
      callback(token);
    }
  })
}

exports.sendTextMessageToApp = function(content, agentId, safe) {
  getToken(function(token) {
    var url = 'https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=' + token;
    var params = {
      touser: '@all',
      msgtype: 'text',
      agentid: agentId,
      text: {
        content: content
      },
      safe: safe
    };
    request.post({url: url, body: JSON.stringify(params)}, function(error, response, body) {
      console.log(body);
    })
  })
};

exports.getUserByCode = function(code, agentId, success) {
  getToken(function(token) {
    var url = 'https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo?access_token=' + token + '&code=' + code + '&agentid=' + agentId;
    request.get(url, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        user = JSON.parse(body);
        success(user);
      } else {
        console.log('error when get user by id!');
      }
    })
  })
};