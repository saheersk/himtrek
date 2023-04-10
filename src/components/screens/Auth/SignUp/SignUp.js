import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <div className="signup-page">
        <div className="wrapper">
          <section id="signup">
            <div className="signup-form">
              <h2>Create a new account.</h2>
              <h6>
                already a member?<Link to="/login/">Login</Link>
              </h6>
              <form action="">
                <input type="text" name="full-name" placeholder="Name" />
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="contact-number" placeholder="Mobile" />
                <input type="text" name="username" placeholder="Username" />
                <input type="text" name="password" placeholder="Password" />
                <input
                  type="text"
                  name="re-password"
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
        </div>
      </div>
    </>
  );
}
