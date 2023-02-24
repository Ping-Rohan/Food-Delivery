import privateInstance from "../Axios/privateInstance";
import { setStore } from "./StoreSlice";

const createStore = (form, navigate) => {
  return async (dispatch) => {
    const response = await privateInstance.post("/store", form);
    dispatch(setStore(response.data.store));
    navigate("/");
  };
};

export { createStore };
