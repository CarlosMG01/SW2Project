const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
  photo_id: String,
  business_id: String,
  caption: String,
  label: String
});

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;
