import axios from "axios";

const privateInstance = axios.create({
  baseURL: "/api/v1",
});
export default privateInstance;
