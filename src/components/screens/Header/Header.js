import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../../Redux/Auth/auth";
import "./Header.css";

function Header() {
  const dispatch = useDispatch();
  const is_LoggedIn = useSelector((state) => state.user.is_LoggedIn);

  let navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
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
            <Link to="/discover">discover</Link>
            <Link to="/about-us">about</Link>
            <Link to="/packages">packages</Link>
            <Link to="/discover">my order</Link>
            <Link to="/cart/">cart</Link>
            <Link to="/contact">contact</Link>
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
              <small onClick={() => handleLogout()}  className="register">
                Logout
              </small>
              </li>
            </div>
            ) : (
              <div>
                <Link to="/login">login</Link>
                <Link to="/signup" className="register">
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
