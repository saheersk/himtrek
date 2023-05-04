import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { clearMessage, loginFailure, loginSuccess } from "../../../../Redux/Auth/auth";
import { BASE_URL } from "../../../../axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoginOtp({toggleOtp}) {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.user.message);

  const [contactNumber, setContactNumber] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearMessage());

    let formattedContactNumber = contactNumber;

    if (!contactNumber.startsWith("+91") && !contactNumber.startsWith("91")) {
      formattedContactNumber = "+91" + contactNumber;
    }

    axios
      .post(`${BASE_URL}/auth/login/number/`, {
        contact_number: formattedContactNumber,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.status_code === 6000) {
          const data = response.data;
          dispatch(loginSuccess(data));
          navigate("/otp/", { state: { contactNumber: contactNumber } } );
        } else {
          dispatch(loginFailure(response.data));
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status_code === 6001) {
          dispatch(loginFailure(error.response.data));
        }
      });
  };

  return (
    <>
      <h4>Login with otp</h4>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <label>Phone Number</label>
        <input
          onChange={(e) => setContactNumber(e.target.value)}
          value={contactNumber}
          type="text"
          placeholder="Enter your number"
        />
        {message && <p>{message.data}</p>}
        <input type="submit" value="Login" />
      </form>
      <span onClick={() => toggleOtp()} className="login-otp">
        Login With Username
      </span>
    </>
  );
}

export default LoginOtp;
