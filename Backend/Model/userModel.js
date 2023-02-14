const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { stringify } = require("querystring");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    validate: [validator.isEmail, "Please provide valid email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    vaildate: [validator.isStringPassword],
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (value) {
        return this.password === value;
      },
      message: "Password doesnot match",
    },
  },
  isVerified: false,
  accountVerificationToken: String,
  accountVerificationTokenExpires: Date,
  passwordChangedAt: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.checkPassword = async function (enteredPW, actualPW) {
  return await bcrypt.compare(enteredPW, actualPW);
};

// user model
const User = mongoose.model("User", userSchema);

// exports
module.exports = User;
