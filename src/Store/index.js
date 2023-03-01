import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import ui from "./ui";
import storeSlice from "./StoreSlice";
import foodSlice from "./FoodSlice";

const store = configureStore({
  reducer: { user: userReducer, ui, store: storeSlice, food: foodSlice },
});

export default store;
