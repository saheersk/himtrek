import React, { useState, useRef } from "react";
import swal from "sweetalert";
import "./Otp.css";

function AutoFillOTP() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const refs = useRef([]);

  const popUp = (e) => {
    e.preventDefault();
    swal({
      title: "Welcome",
      text: "Login Successfuly ",
      icon: "success",
      button: "OK",
    });
    setOtp(["", "", "", "", "", ""]);
  };

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleInputKeyDown = (event, index) => {
    // Delete value and move focus to previous input when backspace key is pressed
    if (event.key === "Backspace" && index > 0 && !otp[index]) {
      const newValues = [...otp];
      newValues[index - 1] = "";
      setOtp(newValues);
      refs.current[index - 1].focus();
    }

    // Delete value and continue deleting when delete key is pressed
    if (event.key === "Delete" && index < 5 && !otp[index]) {
      const newValues = [...otp];
      newValues[index] = "";
      setOtp(newValues);
    }
  };

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
                {otp.map((data, index) => {
                  return (
                    <input
                      className="otp-field"
                      type="text"
                      name="otp"
                      maxLength="1"
                      key={index}
                      value={data}
                      onChange={(e) => handleChange(e.target, index)}
                      onFocus={(e) => e.target.select()}
                      onKeyDown={(event) => handleInputKeyDown(event, index)}
                      ref={(ref) => (refs.current[index] = ref)}
                    />
                  );
                })}
                <h5>Resent OTP</h5>
                <input
                  className="btn btn-primary"
                  onClick={(e) => popUp(e)}
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default AutoFillOTP;
