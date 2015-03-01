mongoose = require('mongoose');

Schema = mongoose.Schema;
userVO = require('./models/user');
userSchema = new Schema(userVO);

exports.User = mongoose.model('User', userSchema);
