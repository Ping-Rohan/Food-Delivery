import { useEffect, useState } from "react";
import axios from "../Axios/index";
import { setAccessToken, setIsLoggedIn } from "../Store/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export default function PersistLogin() {
  const [isMounted, setIsMounted] = useState(true);
  const accessToken = useSelector((state) => state.user.accessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    async function persist() {
      if (isMounted) {
        const response = await axios.get("/users/refresh", {
          withCredentials: true,
        });
        dispatch(setAccessToken(response.data.accessToken));
        dispatch(setIsLoggedIn(true));
        setIsMounted(false);
      }
    }

    !accessToken && persist();
  }, []);

  return isMounted ? <p>Loading</p> : <Outlet />;
}
