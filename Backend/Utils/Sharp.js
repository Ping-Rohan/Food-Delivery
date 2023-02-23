const sharp = require("sharp");
const catchAsync = require("./CatchAsync");

const resizeImage = catchAsync(async (request, response, next) => {
  const filename = Date.now();
  await sharp(request.file.buffer)
    .resize(900, 800)
    .toFormat("jpeg")
    .toFile(`Public/upload-${filename}.jpeg`);

  request.file.filename = `upload-${filename}.jpeg`;
  next();
});

module.exports = { resizeImage };
