import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [wrongCredentials, setWrongCredentials] = useState('credentials');

  const history = useHistory();

  const onChangeEmail = event => {
    setEmail(event.target.value);
  }

  const onChangePassword = event => {
    setPassword(event.target.value);
  }

  useEffect(() => {
    if(localStorage.getItem('loggedUser')) {
      history.push('/dashboard');
    }
  }, [history])

  const onSubmitSignin = () => {
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
    .then(response => response.json())
    .then(user => {
      const id = user.account_id
      if (id) {
        localStorage.setItem('loggedUser', id);
        history.push("/dashboard");
      } else {
        setWrongCredentials('wrong-credentials');
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
            <h1 className="form-header">Sign In</h1>
            <label className="form-label" htmlFor="for">
              Email
            </label>
            <input className="form-input" type="email" required value={email} onChange={onChangeEmail}/>
            <label className="form-label" htmlFor="for">
              Password
            </label>
            <input className="form-input" type="password" required value={password} onChange={onChangePassword}/>
            <p className={wrongCredentials}>Incorrect email and/or password.</p>
            <button className="form-button" type="button" onClick={onSubmitSignin}>
              Login
            </button>
            <Link to="/register" className="form-text">Register</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
