const express = require("express");
const Router = express.Router();
const foodController = require("../Controller/FoodController");
const multer = require("../Utils/Multer");
const sharp = require("../Utils/Sharp.js");
const protectRoute = require("../Utils/protectRoutes");

Router.use(protectRoute.protectRoutes);
Router.route("/")
  .post(multer.array("foodImage"), sharp.resizeImage, foodController.uploadFood)
  .get(foodController.getAllFoods);

module.exports = Router;
