const AppError = require("./AppError");
const CatchAsync = require("./CatchAsync");
const jwt = require("jsonwebtoken");
const User = require("../Model/userModel");

exports.protectRoutes = CatchAsync(async (request, response, next) => {
  let token;

  if (
    request.headers.authorization &&
    request.headers.authorization.startsWith("Bearer")
  ) {
    token = request.headers.authorization.split(" ")[1];
  }

  if (!token) return next(new AppError("Please provide access-token"));

  const decoded = jwt.verify(token, process.env.ACCESS_JWT);

  const userDocument = await User.findById(decoded._id);

  if (!userDocument) return next(new AppError("User no longer exists"));

  if (userDocument.hasChangedPasswordRecently())
    return next(
      new AppError(
        "User changed password recently , Please login with new password"
      )
    );

  request.user = userDocument;

  next();
});
