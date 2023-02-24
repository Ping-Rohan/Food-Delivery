const sharp = require("sharp");
const catchAsync = require("./CatchAsync");

const resizeImage = catchAsync(async (request, response, next) => {
  request.photos = [];
  if (!request.files) return next();
  Promise.all(
    request.files.map((file, i) => {
      file.filename = `${request.user._id}-${Date.now()}-${i}.jpeg`;
      sharp(file.buffer)
        .resize(900, 800)
        .toFormat("jpeg")
        .toFile(`Public/${file.filename}`);

      request.photos.push(file.filename);
    })
  );

  next();
});

module.exports = { resizeImage };
