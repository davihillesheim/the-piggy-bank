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
            <LinkRouter className="footer-link" to="/">
              About Us
            </LinkRouter>
            <LinkRouter className="footer-link" to="/">
              F.A.Q.
            </LinkRouter>
            <LinkRouter className="footer-link" to="/">
              Our features
            </LinkRouter>
          </div>
          <div className="footer-links">
            <h1 className="link-title">Contact</h1>
            <LinkRouter className="footer-link" to="/">
              Contact Us
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
            <small className="rights">
              UP2039551 © {new Date().getFullYear()} All rights reserved.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
