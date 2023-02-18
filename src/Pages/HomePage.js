import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function HomePage() {
  const accesstoken = useSelector((state) => state.user.accessToken);
  return (
    <div>
      HomePage <Link to={"/about"}>Go</Link>
    </div>
  );
}
