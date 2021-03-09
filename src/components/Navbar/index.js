import React from "react";
import "./Navbar.css";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaBars } from "react-icons/fa";

const Navbar = ({ handleClick }) => {
  return (
    <header>
      <nav className="nav">
        <div className="navbar-container">
          <RouterLink to="/" className="navbar-logo">
            piggybank
          </RouterLink>
          <div className="navbar-icon" onClick={handleClick}>
            <FaBars />
          </div>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <ScrollLink
                className="navbar-links"
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Home
              </ScrollLink>
            </li>
            <li className="navbar-item">
              <ScrollLink className="navbar-links" to="about">
                About
              </ScrollLink>
            </li>
            <li className="navbar-item">
              <ScrollLink className="navbar-links" to="contact">
                Contact
              </ScrollLink>
            </li>
          </ul>
          <nav className="signin-button">
            <RouterLink className="signin-link" to="/signin">
              Sign In
            </RouterLink>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
