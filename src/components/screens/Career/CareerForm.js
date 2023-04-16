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
  // const error_message = useSelector((state) => state.user.message);

  const [description, setDescription] = useState("");
  const [resume, setResume] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const navigate = useNavigate();

  const params = useParams();
  const slug = params.slug;

  console.log(resume, "resume");

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    console.log(file, formData, "formData");
    formData.append("file", file, file.name);
    // setResume(event.target.files[0]);

    const reader = new FileReader();
    reader.onload = () => {
      const filePath = URL.createObjectURL(file);
      // Use the filePath to send it to the API
      setResume(filePath);
      console.log(filePath, "filePath");
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${BASE_URL}/web/career/application/${slug}/`,
        {
          full_name: fullName,
          contact_number: contactNumber,
          introduction: description,
          email,
          resume,
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
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status_code === 6001) {
          dispatch(careerFailure(error.response.data));
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
              encType="multipart/form-data"
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
                  onChange={handleFileInputChange}
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
              {/* <button type="submit">Submit</button> */}
              <input type="submit" value="submit" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default CareerForm;
