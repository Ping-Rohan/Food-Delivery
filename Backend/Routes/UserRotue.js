const express = require("express");
const Router = express.Router();
const userController = require("../Controller/UserController");

Router.post("/", userController.createAccount);
Router.get("/:id", userController.getUserById);

module.exports = Router;
