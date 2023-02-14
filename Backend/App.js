const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./Routes/UserRotue");
const globalErrorHandler = require("./Utils/GlobalErrorHandler");

// global middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:5000" }));

// route redirection
app.use("/api/v1/users", userRouter);

// error handler central place
app.use(globalErrorHandler);

module.exports = app;
