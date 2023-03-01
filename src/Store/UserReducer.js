import { setIsLoggedIn, setAccessToken, setUserDocument } from "./UserSlice";
import axios from "../Axios/index";
import privateRoute from "../Axios/privateInstance";

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
    dispatch(setUserDocument(response?.data?.user));
  };
};

const logout = () => {
  return async (dispatch) => {
    dispatch(setIsLoggedIn(false));
    dispatch(setAccessToken(""));
    dispatch(setUserDocument(""));

    const response = await axios.get("/users/logout", {
      withCredentials: true,
    });

    window.location = "/login";
  };
};

const changePassword = (form) => {
  return async (dispatch) => {
    const response = await privateRoute.post("/users/change-password", form);
    dispatch(logout());
  };
};

export { login, getMyProfile, changePassword, logout };
