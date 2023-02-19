import React from "react";
import "./Header.css";
import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">KhanaGhar</div>
        <div className="left">
          <div className="search">
            <AiOutlineSearch />
            <input type="text" placeholder="Search" />
          </div>
          <div className="profile">
            <div className="profile-pic">
              <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                alt=""
              />
            </div>
            <div className="name-dropdown">
              <span>Rohan Tiwari</span>
              <AiFillCaretDown className="dropdown" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
