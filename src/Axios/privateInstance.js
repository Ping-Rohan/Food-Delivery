import axios from "./index";
import store from "../Store/index";
import jwtDecode from "jwt-decode";
import { setAccessToken } from "../Store/UserSlice";

const privateInstance = axios.create({
  baseURL: "/api/v1",
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
  console.log("set header");
  request.headers.authorization = `Bearer ${accessToken}`;
  return request;
});

export default privateInstance;
