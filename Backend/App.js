const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRouter = require("./Routes/UserRotue");
const storeRouter = require("./Routes/storeRoute");
const foodRouter = require("./Routes/FoodRoute");
const globalErrorHandler = require("./Utils/GlobalErrorHandler");
const AppError = require("./Utils/AppError");

// global middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// route redirection
app.use("/api/v1/users", userRouter);
app.use("/api/v1/store", storeRouter);
app.use("/api/v1/food", foodRouter);
app.use("/", express.static("./public"));
app.use("*", (request, response, next) => {
  return next(new AppError("Couldnot Found Route "));
});
// error handler central place
app.use(globalErrorHandler);

module.exports = app;
