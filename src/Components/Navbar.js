import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">My Logo</a>
        </div>
        <ul className="navbar-links">
          <li className="navbar-item">
            <a href="/home">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about">About</a>
          </li>
          <li className="navbar-item">
            <a href="/contact-us">Contact Us</a>
          </li>
          <li className="navbar-item">
            <a href="/help">Help</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
