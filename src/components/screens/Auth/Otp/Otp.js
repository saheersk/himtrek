import React from "react";
import "./Otp.css";

function Otp() {
  return (
    <>
      <div className="otp-page">
        <div className="wrapper">
          <section id="otp">
            <div className="otp-image">
              <div className="image-box">
                <img src={require("../../../assets/images/login.png")} alt="" />
              </div>
            </div>
            <div className="otp-verification">
              <h4>OTP Verification</h4>
              <p>Type One Type Password sent to your mobile number.</p>
              <form action="">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <h5>Resent OTP</h5>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Otp;
