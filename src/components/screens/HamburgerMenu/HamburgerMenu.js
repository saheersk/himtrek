import React, { useEffect, useState } from "react";
import "./HamburgerMenu.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function HamburgerMenu({ handleLogout }) {
  const is_LoggedIn = useSelector((state) => state.user.is_LoggedIn);
  const data = useSelector((state) => state.user.data);

  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("")


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (data) {
      setUsername(data.username)
    }
  }, [data]);

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
              <span>Hey</span> {username && username}
            </h2>
          </div>
          <ul>
            <Link to="/discover/">discover</Link>
            <Link to="/about-us/">about</Link>
            <Link to="/my-orders/">my order</Link>
            <Link to="/packages/">packages</Link>
            <Link to="/cart/">cart</Link>
            <Link to="/contact/">contact</Link>
          </ul>
          <ul className="authentication">
          {is_LoggedIn ? (
              <div>
                <li className="authentication">
                  <small onClick={() => handleLogout()} className="register">
                    Logout
                  </small>
                </li>
              </div>
            ) : (
              <div>
                <Link to="/login/">login</Link>
                <Link to="/sign-up/" className="register">
                  register
                </Link>
              </div>
            )}
            {/* <Link to="/login">login</Link>
            <Link to="/signup" className="register">
              register
            </Link> */}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default HamburgerMenu;
