import React, { useState, useEffect } from "react";
import UseForm from "./UseForm";
import validate from "./ValidateInfo";
import "../FORM/Form.css";
const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = UseForm(
    submitForm,
    validate
  );
  return (
    <>
      <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
          <h1>
            Get started with us today! Create your account by filling out the
            information below.
          </h1>
          <div className="form-inputs">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              className="form-input"
              placeholder="Enter Your username"
              value={values.username}
              onChange={handleChange}
              autoComplete='off'
              />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              EmailId
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-input"
              autoComplete="off"
              placeholder="Enter Your Email Id"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="form-input"
              autoComplete="off"
              placeholder="Enter Your Password "
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              Confirm Password
            </label>
            <input
              id="password1"
              type="password"
              name="password1"
              className="form-input"
              autoComplete="false"
              placeholder="Re-Enter Your Password "
              value={values.password1}
              onChange={handleChange}
            />
            {errors.password1 && <p>{errors.password1}</p>}
          </div>
          <button className="form-input-btn" type="submit">
            Sign up
          </button>
          <br />
          <span className="fomr-input-login">
            Already have an account? Login <a href="#">here</a>
          </span>
        </form>
      </div>
    </>
  );
};

export default FormSignup;
