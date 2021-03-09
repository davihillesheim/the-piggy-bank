import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="links-container">
          <div className="footer-links">
            <h1 className="link-title">About</h1>
            <Link className="footer-link" to="/">About Us</Link>
            <Link className="footer-link" to="/">F.A.Q.</Link>
            <Link className="footer-link" to="/">Our features</Link>
          </div>
          <div className="footer-links">
            <h1 className="link-title">Contact</h1>
            <Link className="footer-link" to="/">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;