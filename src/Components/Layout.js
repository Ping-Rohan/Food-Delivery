import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Layout() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();

  console.log(isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
