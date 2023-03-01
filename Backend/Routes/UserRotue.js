const express = require("express");
const Router = express.Router();
const userController = require("../Controller/UserController");
const { refreshAccessToken } = require("../Utils/IssueJWT");
const protectRoute = require("../Utils/protectRoutes");
const upload = require("../Utils/Multer");
const { resizeImage } = require("../Utils/Sharp");

Router.post("/login", userController.login);
Router.post(
  "/",
  upload.single("profile"),
  resizeImage,
  userController.createAccount
);
Router.get("/verify/:verificationToken", userController.verifyAccount);
Router.get("/logout", userController.logout);
Router.post("/refresh", refreshAccessToken);

Router.use(protectRoute.protectRoutes);
Router.get("/profile", userController.getMyProfile);

Router.post("/change-password", userController.changePassword);

Router.get("/aggregate", userController.aggregate);
Router.get("/:id", userController.getUserById);

module.exports = Router;
