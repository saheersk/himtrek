import React, { useState } from "react";
import "./HamburgerMenu.css";
import { Link, NavLink } from "react-router-dom";

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
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to="/discover"
              >
                discover
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to="/about-us"
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to="/result"
              >
                packages
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to="/my-orders"
              >
                my order
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to="/cart/"
              >
                cart
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to="/contact"
              >
                contact
              </NavLink>
            </li>
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
