const User = require("../Model/userModel");
const AppError = require("../Utils/AppError");
const CatchAsync = require("../Utils/CatchAsync");
const crypto = require("crypto");
const { issueAccessToken, issueRefreshToken } = require("../Utils/IssueJWT");

// creating new account
exports.createAccount = CatchAsync(async (request, response) => {
  const Account = await User.create(request.body);
  const verificationToken = Account.generateVerificationToken();

  await Account.save({ validateBeforeSave: false });

  response.status(200).json({
    Account,
    verification: `localhost:3000/api/v1/users/verify/${verificationToken}`,
  });
});

// get user by id
exports.getUserById = CatchAsync(async (request, response) => {
  const user = await User.findById(request.params.id);

  response.status(200).json({
    user,
  });
});

exports.getMyProfile = CatchAsync(async (request, response) => {
  const userDocument = await User.findById(request.user._id);
  console.log(userDocument);
  response.status(200).json({
    user: userDocument,
  });
});

// Login user
exports.login = CatchAsync(async (request, response, next) => {
  const { email, password } = request.body;

  if (!email || !password)
    return next(new AppError("Please enter email and password"));

  const userDocument = await User.findOne({ email }).select("+password");

  if (
    !userDocument ||
    !(await userDocument.checkPassword(password, userDocument.password))
  )
    return next(new AppError("Email or password incorrect"));

  const accessToken = issueAccessToken({ _id: userDocument._id });
  const refreshToken = issueRefreshToken({ _id: userDocument._id });

  // sending refresh token as HTTP ONLY cookie
  response.cookie("auth", refreshToken, {
    httpOnly: true,
  });

  response.status(200).json({
    message: "Logged in successfully",
    accessToken,
  });
});

// verify account
exports.verifyAccount = CatchAsync(async (request, response, next) => {
  const { verificationToken } = request.params;

  const hashedToken = crypto
    .createHash("sha256")
    .update(verificationToken)
    .digest("hex");

  const userDocument = await User.findOne({
    accountVerificationToken: hashedToken,
    accountVerificationTokenExpires: { $gt: Date.now() },
  });

  if (!userDocument)
    return next(new AppError("Token expires or user doesnot expires", 500));

  userDocument.isVerified = true;
  userDocument.accountVerificationToken = undefined;
  userDocument.accountVerificationTokenExpires = undefined;

  await userDocument.save({ validateBeforeSave: false });

  response.status(200).json({
    message: "Account Verified",
  });
});

exports.changePassword = CatchAsync(async (request, response, next) => {
  const { currentPassword, newPassword } = request.body;

  if (!currentPassword || !newPassword)
    return next(new AppError("Please enter current and new password both"));

  const userDocument = await User.findById(request.user._id);

  if (
    !(await userDocument.checkPassword(currentPassword, userDocument.password))
  )
    return next(new AppError("Incorrect password"));

  userDocument.password = newPassword;
  userDocument.save();

  response.status(200).json({
    message: "Password changed successfully",
  });
});

exports.aggregate = CatchAsync(async (request, response) => {
  const data = await User.aggregate([
    {
      $match: { name: "Rohan Tiwari" },
    },
    {
      $group: {
        _id: "$name",
        fullName: { $first: "$name" },
      },
    },
  ]);

  response.status(200).json({
    data,
  });
});
