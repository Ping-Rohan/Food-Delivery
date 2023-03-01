const Food = require("../Model/FoodModel");
const CatchAsync = require("../Utils/CatchAsync");

exports.uploadFood = CatchAsync(async (request, response) => {
  if (request.photos) request.body.foodImages = request.photos;
  request.body.foodStore = request.user.storeId;
  const food = await Food.create(request.body);

  response.status(200).json({
    food,
  });
});

exports.getAllFoods = CatchAsync(async (request, response) => {
  const foods = await Food.find();
  response.status(200).json({
    foods,
  });
});
