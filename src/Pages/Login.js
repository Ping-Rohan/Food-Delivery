import React from "react";
import "./Login.css";
import { useFormik } from "formik";
import LoginSchema from "./LoginSchema";
import { login } from "../Store/UserReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleChange, handleSubmit, errors, touched, values } = useFormik({
    initialValues: { email: "", password: "", stayLoggedIn: false },
    validationSchema: LoginSchema,
    onSubmit: (value, action) => {
      const loginForm = {
        email: value.email,
        password: value.password,
      };

      dispatch(login(loginForm, navigate, value.stayLoggedIn));
      action.resetForm();
    },
  });

  return (
    <section className="login-wrapper">
      <form className="login" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="">Email</label>
          {touched.email && errors.email && (
            <span className="error">{errors.email}</span>
          )}
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
        </div>
        <div className="input">
          <label htmlFor="">Password</label>
          {touched.password && errors.password && (
            <span className="error">{errors.password}</span>
          )}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            onChange={handleChange}
            name="stayLoggedIn"
            value={values.stayLoggedIn}
          />
          <label htmlFor="">Keep me logged in</label>
        </div>
        <button type="submit">Login</button>
      </form>
    </section>
  );
}
