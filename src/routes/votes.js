wechatApi = require('../utils/wechat_enterprice');

exports.create = {
  handler: function(req, res) {
    wechatApi.getUserByCode(req.body.code, 6, function(user) {
      var message = user.UserId + "发起了新的投票";
      wechatApi.sendTextMessageToApp(message, 6, 0);
      res.send(req.body.code);
    })
    
  }
}