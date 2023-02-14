const User = require("../Model/userModel");

// creating new account
exports.createAccount = async (request, response) => {
  try {
    const Account = await User.create(request.body);

    response.status(200).json({
      Account,
    });
  } catch (error) {
    response.status(404).json({
      error,
    });
  }
};

// get user by id
exports.getUserById = async (request, response) => {
  const user = await User.findById(request.params.id);

  response.status(200).json({
    user,
  });
};
