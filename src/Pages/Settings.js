import "./Settings.css";
import { useState, useRef } from "react";
import { changePassword } from "../Store/UserReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const currentPasswordRef = useRef();
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();

  function handleNewPassword(e) {
    setNewPassword(newPasswordRef.current.value);
  }

  function handleCurrentPassword(e) {
    setCurrentPassword(currentPasswordRef.current.value);
  }

  function handleSubmit() {
    dispatch(
      changePassword(
        { currentPassword, newPassword, confirmPassword },
        navigate
      )
    );
    currentPasswordRef.current.value = "";
    newPasswordRef.current.value = "";
  }

  function handleConfirmPassword() {
    setConfirmPassword(confirmPasswordRef.current.value);
  }

  return (
    <section className="settings">
      <div className="container">
        <div className="password-change-portal">
          <h1 className="portal-heading">Change Password</h1>
          <div className="input">
            <label htmlFor="">Current Password</label>
            <input
              type="password"
              onChange={handleCurrentPassword}
              ref={currentPasswordRef}
            />
          </div>
          <div className="input">
            <label htmlFor="">New Password</label>
            <input
              type="password"
              onChange={handleNewPassword}
              ref={newPasswordRef}
            />
          </div>
          <div className="input">
            <label htmlFor="">Confirm New Password</label>
            <input
              type="password"
              onChange={handleConfirmPassword}
              ref={confirmPasswordRef}
            />
          </div>
          <button className="btn-primary" onClick={handleSubmit}>
            Change
          </button>
        </div>
      </div>
    </section>
  );
}
