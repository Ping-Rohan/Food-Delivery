const express = require("express");
const Router = express.Router();
const userController = require("../Controller/UserController");

Router.post("/", userController.createAccount);
Router.get("/aggregate", userController.aggregate);
Router.get("/:id", userController.getUserById);
Router.post("/login", userController.login);
Router.get("/verify/:verificationToken", userController.verifyAccount);

module.exports = Router;
