import React, { useState } from "react";
import "./HamburgerMenu.css";
import { Link } from "react-router-dom";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`overlay ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      />
      <div className="hamburger-menu">
        <div
          className={`hamburger-menu__button ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="hamburger-menu__icon" />
          <span className="hamburger-menu__icon" />
          <span className="hamburger-menu__icon" />
        </div>
        <nav className={`hamburger-menu__nav ${isOpen ? "open" : ""}`}>
          <div className="name-box">
            <h2>
              <span>Hey</span> Adam
            </h2>
          </div>
          <ul>
            <Link to="/discover">my order</Link>
            <Link to="/discover">discover</Link>
            <Link to="/about-us">about</Link>
            <Link to="/packages">packages</Link>
            <Link to="/contact">contact</Link>
          </ul>
          <ul className="authentication">
            <Link to="/login">login</Link>
            <Link to="/signup" className="register">
              register
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default HamburgerMenu;
