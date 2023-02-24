import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import ui from "./ui";
import storeSlice from "./StoreSlice";

const store = configureStore({
  reducer: { user: userReducer, ui, store: storeSlice },
});

export default store;
