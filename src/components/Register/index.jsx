import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../Signin/Signin.css";
import "./Register.css";
import validator from 'validator';

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState('-invalid')
  const [emailError, setEmailError] = useState('-invalid')
  const [passwordError, setPasswordError] = useState('-invalid');

  const history = useHistory();

  const isDisabled = () => {
    const validator = (nameError.length > 0 && emailError.length > 0 && passwordError.length > 0);
    const passwordValidator = (password.length === 0)
    return validator && passwordValidator;
  }

  const onChangeName = event => {
    const input = event.target.value;
    setName(input);
    if(input.length < 4) {
      setNameError('-invalid');
    } else {
      setNameError('');
    }
  }

  const onChangeEmail = event => {
    const input = event.target.value;
    setEmail(input);
    if (validator.isEmail(input)) {
      setEmailError('');
    } else {
      setEmailError('-invalid');
    }
  }

  const onChangePassword = event => {
    const input = event.target.value;
    setPassword(input);
    if (validator.isStrongPassword(input, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setPasswordError('');
    } else {
      setPasswordError('-invalid');
    }
  }

  const onSubmitRegister = () => {
    fetch('http://localhost:3001/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      })
    })
    .then(response => response.json())
    .then(user => {
      if (user) {
        history.push("/");
      }
    })
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
            <p className={`name${nameError}`}>Name should have 4 or more characters</p>
            <label className="form-label" htmlFor="for">
              Email
            </label>
            <input className="form-input" type="email" required value={email} onChange={onChangeEmail}/>
            <p className={`email${emailError}`}>Invalid email format</p>
            <label className="form-label" htmlFor="for">
              Password
            </label>
            <input className="form-input" type="password" required value={password} onChange={onChangePassword}/>
            <p className={`password${passwordError}`}>Password should contain at least 8 characters, 1 lowercase, 1 uppercase, 1 number and 1 symbol</p>
            <button className="form-button" type="button" disabled={isDisabled()} onClick={onSubmitRegister}>
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
