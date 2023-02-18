import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: {
    isLoggedIn: false,
    userDocument: null,
    accessToken: null,
  },
  reducers: {},
});

export default userSlice.reducer;
