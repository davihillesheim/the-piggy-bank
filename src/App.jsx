import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages';
import SigninPage from './pages/SigninPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SigninPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/dashboard" component={DashboardPage} />
        </Switch>
      </Router>
  );
}

export default App;
