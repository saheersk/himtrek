import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function LoginOtp() {
  return (
    <>
      <h4>Login with otp</h4>
      <form action="">
        <label>Phone Number</label>
        <input
          // onChange={(e) => setUsername(e.target.value)}
          // value={username}
          type="text"
          placeholder="Enter your number"
        />
        {/* {message && <p>{message.data}</p>} */}
        <input type="submit" value="Login" />
      </form>
    </>
  );
}

export default LoginOtp;
