import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

function Header() {
  return (
    <>
      <header>
        <div className="wrapper">
          <h1 className="logo">
            <Link to="/">
              <img
                src={require("../../assets/images/himtrek-logo.svg").default}
                alt=""
              />
            </Link>
          </h1>
          <ul className="nav">
            <Link to="/discover">my order</Link>
            <Link to="/discover">discover</Link>
            <Link to="/about-us">about</Link>
            <Link to="/packages">packages</Link>
            <Link to="/contact">contact</Link>
          </ul>
          <ul className="auth">
            <select name="languages" id="lang">
              <option value="eng">ENG</option>
              <option value="eng">ENG</option>
              <option value="eng">ENG</option>
            </select>
            <Link to="/login">login</Link>
            <Link to="/signup" className="register">
              register
            </Link>
          </ul>

          <HamburgerMenu />
        </div>
      </header>
    </>
  );
}

export default Header;
