import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function LoginOtp() {
  return (
    <>
      <div className="login-otp-page">
        <div className="wrapper">
          <div className="login-otp">
            <h4>Login with otp</h4>
            <form action="">
              <label htmlFor="">Phone</label>
              <input type="text" />
            </form>
            <Link to="/otp">Submit</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginOtp;
