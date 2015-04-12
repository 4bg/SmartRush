mongoose = require('mongoose');
voteSchema = new mongoose.Schema({
  userId: {type: String},
  title: {type: String},
  description: {type: String, required: true},
  optionItems: {type: mongoose.Schema.Types.Mixed},
  isMultiple: {type: Boolean, default: false},
  isDisplayAfterVote: {type: Boolean, default: true},
  isAnonymous: {type: Boolean, default: true},
  createdAt: {type: Date, default: Date.now}
});
voteModel = mongoose.model("Vote", voteSchema);
module.exports = voteModel;