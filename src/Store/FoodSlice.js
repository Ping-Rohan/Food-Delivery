import { createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({
  name: "Food",
  initialState: {
    foods: [],
  },
  reducers: {
    updateFood(state, action) {
      state.foods.push(action.payload);
    },
    replaceFood(state, action) {
      state.foods = action.payload;
    },
  },
});

export default foodSlice.reducer;
const { updateFood, replaceFood } = foodSlice.actions;
export { updateFood, replaceFood };
