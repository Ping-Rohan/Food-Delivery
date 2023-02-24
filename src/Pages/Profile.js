import { getMyProfile } from "../Store/UserReducer";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Profile.css";
import { AiFillCheckCircle } from "react-icons/ai";

export default function Profile() {
  const dispatch = useDispatch();
  const userDocument = useSelector((state) => state.user.userDocument);
  const date = new Date(userDocument?.createdAt);
  useEffect(() => {
    dispatch(getMyProfile());
  }, []);

  return (
    <section className="profile-page">
      <div className="curve">
        <div className="profile-picture">
          <img src={userDocument?.profilePicture} alt="" />
          {userDocument?.isVerified && (
            <AiFillCheckCircle className="verified-logo" />
          )}
        </div>
      </div>

      <div className="container">
        <div className="name">
          <h2>{userDocument?.name}</h2>
          <span className="joined-date">
            Joined {date.getFullYear()}{" "}
            {date.toLocaleString("default", { month: "long" })} {date.getDate()}
          </span>
        </div>
      </div>
    </section>
  );
}
