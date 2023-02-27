import { setIsLoggedIn, setAccessToken, setUserDocument } from "./UserSlice";
import axios from "../Axios/index";
import privateRoute from "../Axios/privateInstance";
import { isAllOf } from "@reduxjs/toolkit";

const login = (formData, navigate) => {
  return async (dispatch) => {
    const response = await axios.post("/users/login", formData, {
      withCredentials: true,
    });
    dispatch(setAccessToken(response.data.accessToken));
    dispatch(setIsLoggedIn(true));
    navigate("/");
  };
};

const getMyProfile = () => {
  return async (dispatch) => {
    const response = await privateRoute.get("/users/profile");
    dispatch(setUserDocument(response.data.user));
  };
};

const changePassword = (form, navigate) => {
  return async (dispatch) => {
    const response = await privateRoute.post("/users/change-password", form);
    // dispatch(setIsLoggedIn(false));
    console.log(response);
    // dispatch(setAccessToken(""));
    // dispatch(setUserDocument(""));
    // navigate("/login");
  };
};

// const logout = () => {
//   return async dispatch => {
//     const response = await privateRoute.get('/uses/logout')
//   }
// }
export { login, getMyProfile, changePassword };
