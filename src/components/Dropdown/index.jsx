import React from "react";
import "./Dropdown.css";
import { FaTimes } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Dropdown = ({ isOpen, handleClick }) => {
  return (
    <aside
      className={isOpen ? "dropdown active" : "dropdown"}
      onClick={handleClick}
    >
      <div className="icon" onClick={handleClick}>
        <FaTimes className="close-icon" />
      </div>
      <div className="dropdown-container">
        <ul className="dropdown-menu">
          <ScrollLink
            to="home"
            className="dropdown-link"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onClick={handleClick}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            className="dropdown-link"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onClick={handleClick}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="contact"
            className="dropdown-link"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onClick={handleClick}
          >
            Contact
          </ScrollLink>
        </ul>
        <div className="dropdown-signin">
          <RouterLink to="/signin" className="signin-link">
            {" "}
            Sign In
          </RouterLink>
        </div>
      </div>
    </aside>
  );
};

export default Dropdown;
