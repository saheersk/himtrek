import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../../axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import {
  clearMessage,
  loginFailure,
  loginSuccess,
} from "../../../../Redux/Auth/auth";
import AutoFillOTP from "../Otp/AutoFillOTP";

export default function SignUp() {
  const dispatch = useDispatch();
  const error_message = useSelector((state) => state.user.message);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRe_Password] = useState("");
  const [email, setEmail] = useState("");
  const [full_name, setFull_name] = useState("");
  const [contact_number, setContact_number] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearMessage());
    axios
      .post(`${BASE_URL}/auth/register/`, {
        username,
        password,
        re_password,
        email,
        full_name,
        contact_number,
      })
      .then((response) => {
        const data = response.data;
        if (response.data.status_code === 6000) {
          dispatch(loginSuccess({ data }));
          navigate("/otp/");
          <AutoFillOTP />;
        } else {
          dispatch(loginFailure(data));
          <AutoFillOTP contact_number={contact_number} />;
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
      <div className="signup-page">
        <div className="wrapper">
          <section id="signup">
            <div className="signup-form">
              <h2>Create a new account.</h2>
              <h6>
                Already a member?<Link to="/login/">Login</Link>
              </h6>
              <form action="" onSubmit={handleSubmit}>
                <input
                  value={full_name}
                  onChange={(e) => setFull_name(e.target.value)}
                  type="text"
                  placeholder="Name"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                />
                <input
                  value={contact_number}
                  onChange={(e) => setContact_number(e.target.value)}
                  type="text"
                  placeholder="Phone number"
                />
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  type="text"
                  placeholder="Username"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                />
                <input
                  onChange={(e) => setRe_Password(e.target.value)}
                  value={re_password}
                  type="password"
                  placeholder="Re-enter password"
                />
                <div className="singup-button">
                  <Link to="/">Go to Home</Link>
                  <input type="submit" value="Register" className="register" />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <div className="image-box">
                <img
                  src={require("../../../assets/images/signup.png")}
                  alt=""
                />
              </div>
            </div>
          </section>
          {error_message && <p>{error_message}</p>}
        </div>
      </div>
    </>
  );
}
