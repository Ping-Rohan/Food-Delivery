import { useEffect, useState } from "react";
import { setAccessToken, setIsLoggedIn } from "../Store/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import axios from "./index";

export default function PersistLogin() {
  const [isMounted, setIsMounted] = useState(true);
  const accessToken = useSelector((state) => state.user.accessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    async function persist() {
      if (isMounted) {
        const response = await axios.post("/users/refresh", {
          withCredentials: true,
        });
        dispatch(setAccessToken(response.data.accessToken));
        dispatch(setIsLoggedIn(true));
        setIsMounted(false);
      }
    }

    !accessToken ? persist() : setIsMounted(false);
  }, []);

  return isMounted ? <p>Loading</p> : <Outlet />;
}
