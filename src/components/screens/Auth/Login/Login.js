import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../../../axiosConfig";
import {
  clearMessage,
  loginFailure,
  loginSuccess,
} from "../../../../Redux/Auth/auth";

function Login() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.user.message);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearMessage());
    axios
      .post(`${BASE_URL}/auth/login/`, {
        username,
        password,
      })
      .then((response) => {
        if (response.data.status_code === 6000) {
          const data = response.data;
          dispatch(loginSuccess(data));
          navigate("/");
        } else {
          dispatch(loginFailure(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status_code === 6001) {
          dispatch(loginFailure(error.response.data));
        }
      });
  };

  return (
    <>
      <div className="login-page">
        <div className="wrapper">
          <section id="login">
            <div className="image-box">
              <div className="main-box">
                <img src={require("../../../assets/images/login.png")} alt="" />
              </div>
            </div>
            <div className="container">
              <h4>Login to Your account</h4>
              <form action="" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  type="text"
                  placeholder="Enter your username"
                />
                <label htmlFor="">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Enter your password"
                />
                <Link className="forgot" to="/forgot-password">
                  Forgot Your Password ?
                </Link>
                {message && <p>{message.data}</p>}
                <input type="submit" value="Login" />
              </form>
              <Link to="/sign-up">Create Account</Link>
              <Link className="login-otp" to="/login-otp">
                Login with otp
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Login;
