const mongoose = require("mongoose");

const storeSchema = mongoose.Schema({
  storeName: {
    type: String,
    required: [true, "Store name is required"],
    unique: true,
  },
  storeDescription: {
    type: String,
    required: [true, "Store description is required"],
  },
  storeImages: [{ type: String }],
  storeLocation: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: [
      {
        type: Number,
        required: true,
      },
    ],
  },
  storeBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "store propriter is required"],
  },
});

storeSchema.index({ storeLocation: "2dsphere" });
const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
