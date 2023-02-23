import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "UI",
  initialState: {
    showShimmer: false,
  },

  reducers: {
    setShowShimmer(state) {
      state.showShimmer = true;
    },
  },
});

const { setShowShimmer } = uiSlice.actions;
export default uiSlice;
export { setShowShimmer };
