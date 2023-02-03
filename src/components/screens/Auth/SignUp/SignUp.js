import React from "react";
import "./SignUp.css";

export default function SignUp() {
  return (
    <>
      <div className="signup-page">
        <div className="wrapper">
          <section id="signup">
            <div className="signup-form">
              <h2>Create a new account.</h2>
              <h6>
                already a member?<span>login</span>
              </h6>
              <form action="">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Mobile" />
                <input type="text" placeholder="Password" />
                <input type="text" placeholder="Re-enter password" />
                <div className="singup-button">
                  <input type="submit" value="Go to Home" />
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
