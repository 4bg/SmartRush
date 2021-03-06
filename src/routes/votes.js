wechatApi = require('../utils/wechatEnterprise');
Vote = require('../models/vote');

exports.create = {
  handler: function(req, res, next) {
    wechatApi.getUserByCode(req.body.code, 6, function(user) {
      var userId = user.UserId;
      
      //save the new vote
      var vote = new Vote();
      vote.userId = userId;
      vote.title = req.body.title;
      vote.description = req.body.description;
      vote.optionItems = req.body.options;
      vote.isMultiple = req.body.isMultiple;
      vote.isDisplayAfterVote = req.body.isDisplayAfterVote;
      vote.isAnonymous = req.body.isAnonymous;
      vote.save(function(error) {
        if(!error) {
          //send message to WeChat
          var message = userId + "发起了新的投票：" + vote.title;
          wechatApi.sendTextMessageToApp(message, 6, 0);
          res.send({voteId: vote._id + ''});
        } else {
          next(new Error(error));
        }
      });
    })
  }
}