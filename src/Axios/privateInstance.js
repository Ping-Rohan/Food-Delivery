import axios from "axios";
import store from "../Store/index";

const privateInstance = axios.create({
  baseURL: "/api/v1",
});

privateInstance.interceptors.request.use((request) => {
  let accessToken = store.getState().user.accessToken;
  request.headers.authorization = `Bearer ${accessToken}`;
  return request;
});

export default privateInstance;
