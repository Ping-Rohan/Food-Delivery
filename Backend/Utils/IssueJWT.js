const jwt = require("jsonwebtoken");
const User = require("../Model/userModel");
const AppError = require("./AppError");
const CatchAsync = require("./CatchAsync");

exports.issueAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_JWT, {
    expiresIn: "300000",
  });
};

exports.issueRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_JWT, {
    expiresIn: "1d",
  });
};

exports.refreshAccessToken = CatchAsync(async (request, response, next) => {
  if (!request.cookies.auth)
    return next(
      new AppError("Please provide refresh token to refresh access token")
    );

  const refreshToken = request.cookies.auth;
  const decoded = jwt.decode(refreshToken);

  const userDocument = await User.findById(decoded._id);
  if (!userDocument) return next(new AppError("User doesnot exist"));

  // this points to the global
  const newRefreshToken = this.issueRefreshToken({ _id: userDocument._id });
  const newAccessToken = this.issueAccessToken({ _id: userDocument._id });

  response.cookie("auth", newRefreshToken, {
    httpOnly: true,
  });

  response.status(200).json({
    accessToken: newAccessToken,
  });
});
