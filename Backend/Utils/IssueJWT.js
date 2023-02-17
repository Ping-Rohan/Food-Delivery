const jwt = require("jsonwebtoken");

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
