import React, { useEffect, useState } from "react";
import "./HamburgerMenu.css";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function HamburgerMenu({ handleLogout }) {
  const is_LoggedIn = useSelector((state) => state.user.is_LoggedIn);
  const data = useSelector((state) => state.user.data);

  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (data) {
      setUsername(data.username);
    }
  }, [data]);

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();

    if (hour >= 5 && hour < 12) {
      setTimeOfDay("Good Morning");
    } else if (hour >= 12 && hour < 18) {
      setTimeOfDay("Good Afternoon");
    } else {
      setTimeOfDay("Good Evening");
    }
  }, []);

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
            {is_LoggedIn ? (
              <h2>
                <span>Hey</span> {username && username}
              </h2>
            ) : (
              <h2>
                <span>{timeOfDay}</span>
              </h2>
            )}
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
            {is_LoggedIn ? (
              <div>
                <li className="authentication">
                  <small
                    onClick={() => handleLogout()}
                    className="register logout"
                  >
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
