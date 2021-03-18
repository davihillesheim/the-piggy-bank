import React from "react";
import "./Footer.css";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="links-container">
          <div className="footer-links">
            <h1 className="link-title">About</h1>
            <LinkScroll
              className="footer-link"
              to="about"
              offset={-80}
              smooth={true}
              duration={500}
            >
              About Us
            </LinkScroll>
          </div>
          <div className="footer-links">
            <h1 className="link-title">Contact</h1>
            <LinkRouter className="footer-link" to="/contact">
              Contact Us
            </LinkRouter>
          </div>
          <div className="footer-links">
            <h1 className="link-title">Get Started</h1>
            <LinkRouter className="footer-link" to="/signin">
              Sign In
            </LinkRouter>
          </div>
        </div>
        <div className="copyrights">
          <div className="copyright-container">
            <LinkScroll
              className="footer-logo"
              to="home"
              offset={-80}
              smooth={true}
              duration={500}
            >
              piggybank
            </LinkScroll>
            <p className="rights">
              UP2039551 © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
