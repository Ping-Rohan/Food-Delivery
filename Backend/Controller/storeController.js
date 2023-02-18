const Store = require("../Model/storeModel");
const catchAsync = require("../Utils/CatchAsync");

// create new store
exports.createStore = catchAsync(async (request, response) => {
  request.body.storeBy = request.user._id;
  console.log(request.body);
  const store = await Store.create(request.body);

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
