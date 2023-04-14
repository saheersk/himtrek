import React, { useState } from "react";
import "./ForgotPassword.css";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import Header from "../../Header/Header";

function ForgotPassword() {
  const [formData, setFormData] = useState({
    phone: "",
    otp: "",
    password: "",
    re_passwprd: "",
  });
  const isTenDigit = /^\d{10}$/.test(formData.phone);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.re_passwprd) {
      Swal.fire({
        icon: "success",
        title: "Your Password is Changed!",
        text: "Your Password is successfully changed.",
      });
      navigate("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Opps!",
        text: "You entered passords are not match.",
      });
    }
  };
  const formHandle = (e) => {
    e.preventDefault();
    if (isTenDigit === true) {
      toggleMenu();
      Swal.fire({
        icon: "success",
        title: "OTP Sent",
        text: `OTP Sent to +91 ${formData.phone}`,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Enter Mobile  Number Correclty",
        text: " Enter your correct mobile number",
      });
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header />
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
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  pattern="[0-9]*"
                  maxLength="10"
                  value={formData.phone}
                />
                <button className={`${isOpen ? "disable" : ""}`}>Submit</button>
              </form>
            </div>
            <div className="verification">
              <form action="" className={`${isOpen ? "open" : ""}`}>
                <label htmlFor="">OTP</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      otp: e.target.value,
                    })
                  }
                  maxLength="6"
                  value={formData.otp}
                />
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                  value={formData.password}
                />
                <label htmlFor="">Re-password</label>
                <input
                  type="password"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      re_passwprd: e.target.value,
                    })
                  }
                  value={formData.re_passwprd}
                />

                <button onClick={(e) => handleSubmit(e)}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ForgotPassword;
