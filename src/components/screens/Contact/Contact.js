import React, { useState } from "react";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../../axiosConfig";
import { contactFailure, contactSuccess } from "../../../Redux/Contact/contact";
import "./Contact.css";
import Swal from "sweetalert2";

function Contact() {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.contact.response);

  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [contact_number, setContact_number] = useState("");

  console.log(response);

  const handleSubmit = (e) => {
    e.preventDefault();

    let formattedContactNumber = contact_number;

    if (!contact_number.startsWith("+91") && !contact_number.startsWith("91")) {
      formattedContactNumber = "+91" + contact_number;
    }

    axios
      .post(`${BASE_URL}/web/contact/`, {
        name,
        message,
        email,
        organization_name: organization ? organization : "",
        contact_number: formattedContactNumber,
      })
      .then((response) => {
        const data = response.data;
        if (response.data.status_code === 6000) {
          dispatch(contactSuccess(data));
          Swal.fire({
            title: `Successfully created your request`,
            text: "Will we contact you",
            icon: "success",
          })
        } else {
          dispatch(contactFailure(data));
          Swal.fire({
            title: `Check your details`,
            text: "Error in some content",
            icon: "error",
          })
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status_code === 6001) {
          dispatch(contactFailure(error.response.data));
          Swal.fire({
            title: `Check your Mobile Number and Email`,
            text: "Email or Mobile Number is Error",
            icon: "error",
          })
        }
      });
  };

  return (
    <>
      <div id="contact-container">
        <Header />
        <div className="wrapper">
          <h4>
            We'll Be Happy To <span>Help You!</span>
          </h4>
          <div className="input-container">
            <div className="left">
              <form action="" onSubmit={(e) => handleSubmit(e)}>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Your EmailAddress"
                />
                <input
                  value={contact_number}
                  onChange={(e) => setContact_number(e.target.value)}
                  type="text"
                  placeholder="Mobile Number"
                />
                <input
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  type="text"
                  placeholder="Organization(Optional)"
                />
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="message"
                  placeholder="Message"
                />
                <input type="submit" value="Send" />
              </form>
            </div>
            <div className="right">
              <img
                src={require("../../assets/images/contact.svg").default}
                alt="Contact"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
