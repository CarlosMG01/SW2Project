const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  user_id: String,
  name: String,
  review_count: Number
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
