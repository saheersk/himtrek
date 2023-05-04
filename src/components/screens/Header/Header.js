import React, { memo, useEffect, useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../../Redux/Auth/auth";
import "./Header.css";

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const data = useSelector((state) => state.user.data);

  const [username, setUsername] = useState("");
  let navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  useEffect(() => {
    if (data) {
      setUsername(data.username);
    }
  }, [data]);

  return (
    <>
      <header>
        <div className="wrapper">
          <div className="logo">
            <Link to="/">
              <img
                src={require("../../assets/images/himtrek-logo.svg").default}
                alt=""
              />
            </Link>
          </div>
          <ul className="nav">
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to="/"
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to="/discover/"
              >
                discover
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to="/about-us/"
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to="/result/"
              >
                packages
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to="/my-orders/"
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
                to="/contact/"
              >
                contact
              </NavLink>
            </li>
          </ul>
          <ul className="auth">
            <select name="languages" id="lang">
              <option value="eng">ENG</option>
              <option value="eng">ENG</option>
              <option value="eng">ENG</option>
            </select>

            {isLoggedIn ? (
              <div className="logged-box">
                <li className="user-name">
                  <span>{username && username}</span>
                </li>
                <li className="authentication">
                  <small onClick={() => handleLogout()} className="register">
                    Logout
                  </small>
                </li>
              </div>
            ) : (
              <div>
                <Link to="/login">login</Link>
                <Link to="/sign-up/" className="register">
                  Register
                </Link>
              </div>
            )}
          </ul>
          <HamburgerMenu handleLogout={handleLogout} />
        </div>
      </header>
    </>
  );
}

export default memo(Header);
