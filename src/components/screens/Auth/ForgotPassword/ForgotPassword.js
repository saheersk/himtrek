import React, { useState } from "react";
import "./ForgotPassword.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Header from "../../Header/Header";
import axios from "axios";
import { BASE_URL } from "../../../../axiosConfig";
import { useDispatch } from "react-redux";
import { passwordFailure, passwordSuccess } from "../../../../Redux/Auth/forgotPassword";

function ForgotPassword() {
  const dispatch = useDispatch();
  // const error_message = useSelector((state) => state.user.message);

  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const isTenDigit = /^\d{10}$/.test(phone);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password === rePassword) {
      axios
      .post(`${BASE_URL}/auth/confirm/change-password/`, {
        contact_number: "+91" + phone,
        otp,
        password,
        re_password: rePassword,
      })
      .then((response) => {
        if (response.data.status_code === 6000) {
          const data = response.data;
          dispatch(passwordSuccess(data));
          Swal.fire({
            title: 'Successfully Changed your password',
            text: 'Password changed successfully',
            icon: 'success',
            confirmButtonText: 'Ok',
          }).then((result) => {
            if (result.value) {
              navigate('/');
            }
          });
        }
        else  {
          dispatch(passwordFailure(response.data));
        }
        
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status_code === 6001) {
          dispatch(passwordFailure(error.response.data));
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Opps!",
        text: "You entered passwords are not match.",
      });
    }
  };
  const formHandle = (e) => {
    e.preventDefault();
    if (isTenDigit === true) {
      toggleMenu();
      
      axios
      .post(`${BASE_URL}/auth/verify/change-password/`, {
        contact_number: "+91" + phone,
      })
      .then((response) => {
        if (response.data.status_code === 6000) {
          const data = response.data;
          dispatch(passwordSuccess(data));
          Swal.fire({
            icon: "success",
            title: "OTP Sent",
            text: `OTP Sent to +91 ${phone}`,
          });
        }
        else  {
          dispatch(passwordFailure(response.data));
        }
        
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status_code === 6001) {
          dispatch(passwordFailure(error.response.data));
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Enter Mobile  Number Correctly",
        text: " Enter your correct mobile number",
      });
    }
  };

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
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
                <button className={`${isOpen ? "disable" : ""}`}>Submit</button>
              </form>
            </div>
            <div className="verification">
              <form action="" className={`${isOpen ? "open" : ""}`}>
                <label htmlFor="">OTP</label>
                <input
                  type="text"
                  onChange={(e) => setOtp(e.target.value)}
                  value={otp}
                  maxLength="6"
                />
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <label htmlFor="">Re-password</label>
                <input
                  type="password"
                  onChange={(e) => setRePassword(e.target.value)}
                  value={rePassword}
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
