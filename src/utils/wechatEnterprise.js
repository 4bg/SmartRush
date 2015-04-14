var config = require('../config');
var request = require('request');
var logBuilder = require('./logBuilder');
var logger = require('./logger');

function getToken(callback) {
  var url = 'https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid='
  + config.corpId + '&corpsecret='
  + config.secret;
  request.get(url, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      response = (JSON.parse(body));
      var log = logBuilder.getLogByRequest({
        method: 'GET',
        url: url,
        param: {
          corpid: config.corpid,
          corpsecret: config.secret
        },
        response: response
      });
      if(response.access_token && response.access_token.length > 0) {
        logger.info(log, 'wechat-api');
        token = response.access_token;
        callback(token);
      } else if (response.errmsg) {
        logger.error(log, 'wechat-api');
        throw new Error('Failed to get the token, error message is: ' + response.errmsg);
      } else {
        logger.error(log, 'wechat-api')
        throw new Error('Unexpected response from wechat api');
      }
    } else {
      throw new Error('Error when querying the wechat api');
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
      //log this request
      var requestResponse = JSON.parse(body);
      var log = logBuilder.getLogByRequest({
        method: 'POST',
        url: url,
        param: params,
        response: requestResponse
      });
      logger.info(log, 'wechat-api');
    })
  })
};

exports.getUserByCode = function(code, agentId, success) {
  getToken(function(token) {
    var url = 'https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo?access_token=' + token + '&code=' + code + '&agentid=' + agentId;
    request.get(url, function(error, response, body) {
      var requestResponse = JSON.parse(body);
      var log = logBuilder.getLogByRequest({
        method: 'GET',
        url: url,
        param: {
          code: code,
          agentid: agentId
        },
        response: requestResponse
      });
      if (!error && response.statusCode === 200) {
        logger.info(log, 'wechat-api');
        success(requestResponse);
      } else {
        logger.error(log, 'wechat-api');
        throw new Error('Failed to get the user info from Wechat');
      }
    })
  })
};