const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  url: String,
  address: String,
  name: String,
  online_order: String,
  book_table: String,
  rate: String,
  votes: Number,
  phone: String,
  location: String,
  rest_type: String,
  dish_liked: String,
  cuisines: String,
  approx_cost: String,
  reviews_list: String,
  menu_item: String,
  listed_in_type: String,
  listed_in_city: String
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
