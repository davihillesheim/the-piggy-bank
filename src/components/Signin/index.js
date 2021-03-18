import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
  return (
    <div className="signin-container">
      <div className="form-container">
        <header className="signin-header">
          <Link className="form-logo" to="/">
            piggybank
          </Link>
        </header>
        <div className="form-content">
          <form className="form">
            <h1 className="form-header">Sign In</h1>
            <label className="form-label" htmlFor="for">
              Email
            </label>
            <input className="form-input" type="email" required />
            <label className="form-label" htmlFor="for">
              Password
            </label>
            <input className="form-input" type="password" required />
            <button className="form-button" type="submit">
              Login
            </button>
            <span className="form-text">Forgot password</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
