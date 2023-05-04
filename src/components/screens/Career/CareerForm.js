import React, { useState } from "react";
import "./Career.css";
import Header from "../Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { careerFailure, careerSuccess } from "../../../Redux/Career/careerForm";
import { BASE_URL } from "../../../axiosConfig";
import Swal from "sweetalert2";

function CareerForm() {
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const [resume, setResume] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const navigate = useNavigate();

  const params = useParams();
  const slug = params.slug;

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file, file.name);
    setResume(file)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formattedContactNumber = contactNumber;

    if (!contactNumber.startsWith("+91") && !contactNumber.startsWith("91")) {
      formattedContactNumber = "+91" + contactNumber;
    }

    axios
      .post(
        `${BASE_URL}/web/career/application/${slug}/`,
        {
          full_name: fullName,
          contact_number: formattedContactNumber,
          introduction: description,
          email,
          resume: resume,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        const data = response.data;
        console.log(response.data, "===");
        if (response.data.status_code === 6000) {
          dispatch(careerSuccess({ data }));
          Swal.fire({
            title: "Successfully",
            text: "Submitted your request",
            icon: "success",
          })
          .then((result) => {
            if (result.value) {
              navigate("/career/");
            }
          })
        } else {
          dispatch(careerFailure(data));
          Swal.fire({
            title: "Error",
            text: "Check your content",
            icon: "error",
          })
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status_code === 6001) {
          dispatch(careerFailure(error.response.data));
          Swal.fire({
            title: "Error",
            text: "Check your request",
            icon: "error",
          })
        }
      });
  };

  return (
    <>
      <Header />
      <section id="career-form">
        <div className="wrapper">
          <div className="form">
            <h2>Complete Your Application</h2>
            <form
              action=""
              onSubmit={(e) => handleSubmit(e)}
              enctype="multipart/form-data"
            >
              <div className="item">
                <label htmlFor="">Full Name</label>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                />
              </div>
              <div className="item">
                <label htmlFor="">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                />
              </div>
              <div className="item">
                <label htmlFor="">Phone Number</label>
                <input
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  type="text"
                />
              </div>
              <div className="item">
                <label htmlFor="">Upload Resume</label>
                <input
                  onChange={(e) => handleFileInputChange(e)}
                  accept=".pdf,.doc,.docx"
                  type="file"
                />
              </div>
              <div className="item-intro">
                <label htmlFor="">Introduction</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  name=""
                  id=""
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <input type="submit" value="submit" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default CareerForm;
