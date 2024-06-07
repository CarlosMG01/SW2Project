const mongoose = require('mongoose');

const TipSchema = new mongoose.Schema({
  user_id: String,
  business_id: String,
  text: String,
  date: Date,
});

const Tip = mongoose.model('Tip', TipSchema);

module.exports = Tip;
