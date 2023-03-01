const Store = require("../Model/storeModel");
const catchAsync = require("../Utils/CatchAsync");
const User = require("../Model/userModel");

// create new store
exports.createStore = catchAsync(async (request, response) => {
  request.body.storeBy = request.user._id;
  if (request.photos) request.body.storeImages = request.photos;
  request.body.storeLocation = JSON.parse(request.body.storeLocation);
  const store = await Store.create(request.body);

  await User.findByIdAndUpdate(request.user._id, {
    hasStore: true,
    storeId: store._id,
  });

  response.status(200).json({
    message: "Store created successfully",
    store,
  });
});

// get store near user location
exports.nearStore = catchAsync(async (request, response, next) => {
  const longitude = parseFloat(request.body.longitude);
  const latitude = parseFloat(request.body.latitude);

  const stores = await Store.aggregate([
    {
      $geoNear: {
        near: {
          type: "Point",
          coordinates: [longitude, latitude],
        },
        distanceField: "distance",
        maxDistance: 50000,
        spherical: true,
        key: "storeLocation",
      },
    },
  ]);

  response.status(200).json({
    stores,
  });
});
