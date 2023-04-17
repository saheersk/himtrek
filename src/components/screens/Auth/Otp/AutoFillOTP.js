import React, { useState, useRef, useEffect } from "react";
import swal from "sweetalert2";
import { BASE_URL } from "../../../../axiosConfig";
import axios from "axios";
import {
  clearMessage,
  loginFailure,
  loginSuccess,
} from "../../../../Redux/Auth/auth";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "./Otp.css";
import { resendFailure, resendSuccess } from "../../../../Redux/Auth/resendOtp";

function AutoFillOTP() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.user.message);
  // const userData = useSelector((state) => state.user.data);

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const refs = useRef([]);

  const navigate = useNavigate();

  const contactNumber = useRef("");
  const location = useLocation();

  useEffect(() => {
    if (contactNumber.current === "") {
      contactNumber.current = location.state.contactNumber;
    }
  }, [location.state.contactNumber]);

  const handleResend = () => {
    axios
      .post(`${BASE_URL}/auth/resend/otp/`, {
        contact_number: contactNumber ? contactNumber : "",
      })
      .then((response) => {
        if (response.data.status_code === 6000) {
          const data = response.data;
          dispatch(resendSuccess(data));
        } else {
          dispatch(resendFailure(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status_code === 6001) {
          dispatch(resendFailure(error.response.data));
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearMessage());

    const num = otp.join("");

    console.log(num);

    axios
      .post(`${BASE_URL}/auth/verify/`, {
        otp: num,
        contact_number: contactNumber ? contactNumber : "",
      })
      .then((response) => {
        if (response.data.status_code === 6000) {
          const data = response.data;
          localStorage.setItem("user_data", JSON.stringify(data));
          dispatch(loginSuccess(data));
          setOtp(["", "", "", "", "", ""]);
          swal
            .fire({
              title: "Successful",
              text: "OTP verified.",
              icon: "success",
              confirmButtonText: "Ok",
            })
            .then((result) => {
              if (result.value) {
                navigate("/");
              }
            });
        } else {
          dispatch(loginFailure(response.data));
          swal
            .fire({
              title: "Otp",
              text: "OTP Limit excceded.",
              icon: "error",
              confirmButtonText: "Ok",
            })
            .then((result) => {
              if (result.value) {
                navigate("/otp/");
              }
            });
        }
      })
      .catch((error) => {
        if (error.response.status_code === 6001) {
          dispatch(loginFailure(error.response.data));
        }
      });
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
              <p>One Time Password sent to your mobile number.</p>
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
                {message && <p>{message.data}</p>}
                <span onClick={() => handleResend()}>Resent OTP</span>
                <input
                  className="btn btn-primary"
                  onClick={(e) => handleSubmit(e)}
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
