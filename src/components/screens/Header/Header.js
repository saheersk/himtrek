import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <div className="wrapper">
          <h1 className="logo">
            <img
              src={require("../../assets/images/himtrek-logo.svg").default}
              alt=""
            />
          </h1>
          <ul className="nav">
            <li>discover</li>
            <li>about</li>
            <li>packages</li>
            <li>contact</li>
          </ul>
          <ul className="auth">
            <select name="languages" id="lang">
              <option value="eng">ENG</option>
              <option value="eng">ENG</option>
              <option value="eng">ENG</option>
            </select>
            <li>login</li>
            <li className="register">register</li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
