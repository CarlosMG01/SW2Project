const mongoose = require('mongoose');
const Restaurant = require('./restaurant').Restaurant;
const User = require('./user');
const Review = require('./review');
const Tip = require('./tip');
const Photo = require('./photo');

module.exports = { Restaurant, User, Review, Tip, Photo };
