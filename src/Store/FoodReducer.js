import privateInstance from "../Axios/privateInstance";
import { updateFood, replaceFood } from "./FoodSlice";

const uploadFood = (foodData) => {
  return async (dispatch) => {
    const response = await privateInstance.post("/food", foodData);
    dispatch(updateFood(response.data.food));
  };
};

const getFoods = () => {
  return async (dispatch) => {
    const response = await privateInstance.get("/food");
    dispatch(replaceFood(response.data.foods));
  };
};

export { uploadFood, getFoods };
