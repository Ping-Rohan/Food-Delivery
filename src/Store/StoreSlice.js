import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "store",
  initialState: {
    store: null,
  },
  reducers: {
    setStore(state, action) {
      state.store = action.payload;
    },
  },
});

const { setStore } = storeSlice.actions;
export default storeSlice;
export { setStore };
