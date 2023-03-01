import axios from "axios";
import store from "../Store";
import { logout } from "../Store/UserReducer";

const commonRoute = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

commonRoute.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    if (error.response.status === 401) store.dispatch(logout());
  }
);

export default commonRoute;
