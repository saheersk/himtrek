import React from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../../Redux/Auth/auth";
import "./Header.css";

function Header() {
  const dispatch = useDispatch();
  const is_LoggedIn = useSelector((state) => state.user.is_LoggedIn);

  let navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

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
            <li>
              <NavLink exact activeClassName="active" to="/discover">
                discover
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about-us">
                about
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/result">
                packages
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/discover">
                my order
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/cart/">
                cart
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/contact">
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

            {is_LoggedIn ? (
              <div>
                <li className="user-name">
                  <span>Adam John</span>
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
                <Link to="/sign-up" className="register">
                  register
                </Link>
              </div>
            )}
          </ul>
          <HamburgerMenu />
        </div>
      </header>
    </>
  );
}

export default Header;
