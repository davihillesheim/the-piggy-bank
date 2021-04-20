import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../Signin/Signin.css";

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const onChangeName = event => {
    setName(event.target.value);
  }

  const onChangeEmail = event => {
    setEmail(event.target.value);
  }

  const onChangePassword = event => {
    setPassword(event.target.value);
  }

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
            <h1 className="form-header">Create your account</h1>
            <label className="form-label" htmlFor="for">
              Name
            </label>
            <input className="form-input" type="text" required value={name} onChange={onChangeName}/>
            <label className="form-label" htmlFor="for">
              Email
            </label>
            <input className="form-input" type="email" required value={email} onChange={onChangeEmail}/>
            <label className="form-label" htmlFor="for">
              Password
            </label>
            <input className="form-input" type="password" required value={password} onChange={onChangePassword}/>
            <button className="form-button" type="button">
              Register
            </button>
            <Link to="/signin" className="form-text">Already have an account? Log in!</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
