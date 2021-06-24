const mongoose = require('mongoose');

const CarsSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
    lowercase: true,
  },
  model: {
    type: String,
    required: true,
    lowercase: true,
  },
  version: {
    type: String,
    required: true,
    lowercase: true,
  },
  year: {
    type: Number,
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  car_shift: {
    type: String,
    required: true,
    lowercase: true,
  },
  sale_price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Cars', CarsSchema);
