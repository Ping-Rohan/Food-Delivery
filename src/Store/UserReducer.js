import { setIsLoggedIn, setAccessToken, setUserDocument } from "./UserSlice";
import axios from "../Axios/index";
import privateRoute from "../Axios/privateInstance";

const login = (formData, navigate, stayLoggedIn) => {
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

export { login, getMyProfile };
