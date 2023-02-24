const express = require("express");
const Router = express.Router();
const { protectRoutes } = require("../Utils/protectRoutes");
const storeController = require("../Controller/storeController");
const upload = require("../Utils/Multer");
const { resizeImage } = require("../Utils/Sharp");

Router.use(protectRoutes);
Router.route("/").post(
  upload.array("storeImages", 5),
  resizeImage,
  storeController.createStore
);
Router.route("/near").get(storeController.nearStore);

module.exports = Router;
