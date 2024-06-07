const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  business_id: String,
  name: String,
  address: String,
  city: String,
  latitude: Number,
  longitude: Number,
  stars: Number,
  review_count: Number,
  attributes: Object,
  categories: String,
  hours: Object
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
