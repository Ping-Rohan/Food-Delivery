const User = require("../Model/userModel");
const AppError = require("../Utils/AppError");
const CatchAsync = require("../Utils/CatchAsync");

// creating new account
exports.createAccount = CatchAsync(async (request, response) => {
  const Account = await User.create(request.body);

  response.status(200).json({
    Account,
  });
});

// get user by id
exports.getUserById = CatchAsync(async (request, response) => {
  const user = await User.findById(request.params.id);

  response.status(200).json({
    user,
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

  response.status(200).json({
    message: "Logged in successfully",
  });
});
