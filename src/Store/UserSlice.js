import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: {
    isLoggedIn: false,
    userDocument: null,
    accessToken: null,
  },
  reducers: {
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    setUserDocument(state, action) {
      state.userDocument = action.payload;
    },
  },
});

const { setIsLoggedIn, setAccessToken, setUserDocument } = userSlice.actions;

export { setIsLoggedIn, setAccessToken, setUserDocument };
export default userSlice.reducer;
