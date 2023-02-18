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
    initialValues: { email: "", password: "" },
    validationSchema: LoginSchema,
    onSubmit: (value, action) => {
      dispatch(login(value, navigate));
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
        <button type="submit">Login</button>
      </form>
    </section>
  );
}
