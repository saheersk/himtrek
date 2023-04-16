import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function LoginOtp() {
  return (
    <>
      <form action="" >
                <label>Phone Number</label>
                <input
                  // onChange={(e) => setUsername(e.target.value)}
                  // value={username}
                  type="text"
                  placeholder="Enter your username"
                />
                <Link className="forgot" to="/forgot-password">
                  Forgot Your Password ?
                </Link>
                {/* {message && <p>{message.data}</p>} */}
                <input type="submit" value="Login" />
              </form>
    </>
  );
}

export default LoginOtp;
