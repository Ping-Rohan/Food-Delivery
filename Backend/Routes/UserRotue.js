const express = require("express");
const Router = express.Router();
const userController = require("../Controller/UserController");
const { refreshAccessToken } = require("../Utils/IssueJWT");
const protectRoute = require("../Utils/protectRoutes");
const upload = require("../Utils/Multer");
const { resizeImage } = require("../Utils/Sharp");

Router.post("/login", userController.login);
Router.get("/refresh", refreshAccessToken);
Router.post(
  "/",
  upload.single("profile"),
  resizeImage,
  userController.createAccount
);
Router.get("/verify/:verificationToken", userController.verifyAccount);
Router.use(protectRoute.protectRoutes);
Router.get("/profile", userController.getMyProfile);
Router.get("/aggregate", userController.aggregate);
Router.get("/:id", userController.getUserById);

module.exports = Router;
