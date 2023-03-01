const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { stringify } = require("querystring");

const userSchema = mongoose.Schema(
  {
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
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    profilePicture: {
      type: String,
      default: "https://ionicframework.com/docs/img/demos/avatar.svg",
    },
    storeId: {
      type: mongoose.Schema.ObjectId,
    },
    hasStore: false,
    accountVerificationToken: String,
    accountVerificationTokenExpires: Date,
    passwordChangedAt: Date,
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.checkPassword = async function (enteredPW, actualPW) {
  return await bcrypt.compare(enteredPW, actualPW);
};

userSchema.methods.generateVerificationToken = function () {
  const token = crypto.randomBytes(40).toString("hex");
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  this.accountVerificationToken = hashedToken;
  this.accountVerificationTokenExpires = Date.now() + 10 * 60 * 1000;

  return token;
};

userSchema.methods.hasChangedPasswordRecently = function (jwtIssued) {
  if (this.passwordChangedAt) {
    const passwordChangedTime = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return jwtIssued < passwordChangedTime;
  }

  return false;
};

// user model
const User = mongoose.model("User", userSchema);

// exports
module.exports = User;
