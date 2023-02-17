const express = require("express");
const Router = express.Router();
const { protectRoutes } = require("../Utils/protectRoutes");
const storeController = require("../Controller/storeController");

Router.use(protectRoutes);
Router.route("/").post(storeController.createStore);
Router.route("/near").get(storeController.nearStore);

module.exports = Router;
