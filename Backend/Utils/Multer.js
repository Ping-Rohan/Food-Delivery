const multer = require("multer");
const AppError = require("./AppError");

const multerStorage = multer.memoryStorage();

const multerFile = (request, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Only image is accepted"), false);
  }
};

const upload = multer({
  fileFilter: multerFile,
  storage: multerStorage,
});

module.exports = upload;
