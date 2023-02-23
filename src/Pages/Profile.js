import { getMyProfile } from "../Store/UserReducer";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Profile.css";
import HorizontalItem from "../Components/HorizontalItem";
import { AiFillCheckCircle } from "react-icons/ai";

export default function Profile() {
  const dispatch = useDispatch();
  const userDocument = useSelector((state) => state.user.userDocument);

  console.log(userDocument);
  useEffect(() => {
    dispatch(getMyProfile());
  }, []);

  return (
    <section className="profile-page">
      <div className="curve">
        <div className="profile-picture">
          <img src={userDocument?.profilePicture} alt="" />
          <AiFillCheckCircle className="verified-logo" />
        </div>
      </div>

      <div className="container">
        <div className="name">
          <h2>{userDocument?.name}</h2>
        </div>
      </div>
    </section>
  );
}
