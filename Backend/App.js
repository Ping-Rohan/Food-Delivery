const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./Routes/UserRotue");

// global middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:5000" }));

// route redirection
app.use("/api/v1/users", userRouter);

module.exports = app;
