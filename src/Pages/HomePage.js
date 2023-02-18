import React from "react";
import { useSelector } from "react-redux";

export default function HomePage() {
  const accesstoken = useSelector((state) => state.user.accessToken);
  console.log(accesstoken);
  return <div>HomePage</div>;
}
