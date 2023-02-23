import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import ui from "./ui";

const store = configureStore({ reducer: { user: userReducer, ui } });

export default store;
