const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  foodName: {
    type: String,
    required: [true, "Please provide food name"],
  },
  foodImages: {
    type: [String],
    required: [true, "Please upload at lease one food images"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter food stock quantity"],
  },
  sold: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, "Please enter food price"],
  },
  foodStore: {
    type: mongoose.Schema.ObjectId,
    ref: "Store",
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
