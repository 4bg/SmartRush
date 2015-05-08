var mongoose = require('mongoose');

var voteSchema = new mongoose.Schema({
  userId: {type: String},
  title: {type: String, required: true},
  description: {type: String},
  optionItems: {type: mongoose.Schema.Types.Mixed},
  isMultiple: {type: Boolean, default: false},
  isDisplayAfterVote: {type: Boolean, default: true},
  isAnonymous: {type: Boolean, default: true},
  createdAt: {type: Date, default: Date.now}
});

// voteSchema.path('title').validate(function(title) {
//   return title && title.length > 1 && title.length < 21;
// }, 'The length of the title should be between 2 and 20');
voteModel = mongoose.model("Vote", voteSchema);
module.exports = voteModel;