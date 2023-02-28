import axios from "./index";
import store from "../Store/index";
import jwtDecode from "jwt-decode";
import { setAccessToken } from "../Store/UserSlice";
import { logout } from "../Store/UserReducer";

const privateInstance = axios.create({
  baseURL: "/api/v1",
  withCredentials: true,
});

async function sendRefreshRequest() {
  let accessToken = store.getState().user.accessToken;
  const decoded = jwtDecode(accessToken);

  if (decoded.exp < new Date().getTime() / 1000) {
    const response = await axios.get("/users/refresh", {
      withCredentials: true,
    });
    store.dispatch(setAccessToken(response.data.accessToken));
    return response.data.accessToken;
  }
  return accessToken;
}

privateInstance.interceptors.request.use(async (request) => {
  const accessToken = await sendRefreshRequest();
  request.headers.authorization = `Bearer ${accessToken}`;
  return request;
});

privateInstance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    if (error.response.status === 401) store.dispatch(logout());
  }
);

export default privateInstance;
