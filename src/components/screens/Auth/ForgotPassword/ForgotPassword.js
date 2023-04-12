import React, { useState } from "react";
import "./ForgotPassword.css";

function ForgotPassword() {
  const [formData, setFormData] = useState();

  const formHandle = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section id="password">
        <div className="wrapper">
          <div className="forgot-password">
            <h1>Forgot Password !</h1>
            <div className="content-box">
              <form action="" onSubmit={formHandle}>
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your mobile number"
                  onChange={}
                />
                <button>Submit</button>
              </form>
            </div>
            <div className="verification">
              <form action="">
                <label htmlFor="">OTP</label>
                <input type="text" />
                <label htmlFor="">Password</label>
                <input type="text" />
                <label htmlFor="">Repassword</label>
                <input type="text" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgotPassword;
