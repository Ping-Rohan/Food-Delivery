import { setIsLoggedIn, setAccessToken, setUserDocument } from "./UserSlice";
import axios from "../Axios/index";

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

export { login };
