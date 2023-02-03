import React from "react";
import "./Login.css";

function Login() {
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
              <form action="">
                <label htmlFor="">Email</label>
                <input type="text" />
                <label htmlFor="">Password</label>
                <input type="text" />
                <span>Forgot Your Password</span>
                <input type="submit" value="Login" />
              </form>
              <span>Create Account</span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Login;
