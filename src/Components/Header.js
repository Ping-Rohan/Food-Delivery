import React, { useDebugValue, useEffect, useState } from "react";
import "./Header.css";
import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const userDocument = useSelector((state) => state.user.userDocument);

  function handleDropdown() {
    setShowDropdown((prev) => !prev);
  }

  function handleWarningClose() {
    setShowWarning(false);
  }

  return (
    <>
      {showWarning && !userDocument?.isVerified && (
        <div className="warning">
          <p>Please verify your account ! You are not verified</p>
          <AiOutlineClose onClick={handleWarningClose} className="close-btn" />
        </div>
      )}
      <header>
        <div className="container">
          <Link to="/">
            <div className="logo">KhanaGhar</div>
          </Link>
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
                <span>{userDocument?.name}</span>
                <AiFillCaretDown
                  className="dropdown"
                  onClick={handleDropdown}
                />
                {showDropdown && (
                  <div className="dropdown-menu">
                    <Link to="/profile">
                      <li>Profile</li>
                    </Link>
                    <Link to="/cart">
                      <li>Cart</li>
                    </Link>
                    {!userDocument?.hasStore ? (
                      <Link to="/create-store">
                        <li>Create Store</li>
                      </Link>
                    ) : (
                      <Link to="/store">
                        <li>Your Store</li>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
