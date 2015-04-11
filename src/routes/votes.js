wechatApi = require('../utils/wechat_enterprice');

exports.create = {
  handler: function(req, res) {
    var message = "xxx发起了新的投票";
    wechatApi.sendTextMessageToApp(message, 6, 0);
    res.send(JSON.stringify(req.body));
  }
}