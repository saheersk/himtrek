import React, { useState } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import Calendar from "react-calendar";

import "./TravelerInfo.css";
import "react-calendar/dist/Calendar.css";

import Swal from "sweetalert2";

function TravelerInfo() {
  const [date, setDate] = useState(format(new Date(), "dd MMM"));

  function handleDateChange(value) {
    setDate(`${format(value, "dd MMM")}`);
  }

  const [formData, setFormData] = useState({
    adults: "",
    family: "",
    children: "",
    fname: "",
    email: "",
    phone: "",
    requirements: "",
    comments: "",
  });

  const formHandle = (e) => {
    e.preventDefault();
    toggleMenu();
    Swal.fire({
      icon: "success",
      title: "Added Successfuly",
      text: " Your detials are added successfuly",
    });
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section id="traveler-info">
        <Header />
        <div className="wrapper">
          <section id="departure-info">
            <div className="date-container">
              <h3>Pick a departure date</h3>
              <div className="content-box">
                <div className="calender-box">
                  <Calendar
                    value={date}
                    onChange={handleDateChange}
                    minDate={new Date()}
                  />
                </div>
                <div className="confirmation-box">
                  <h4>Available options for {date}</h4>
                  <div className="package-info">
                    <div className="info-box">
                      <h5>Triund Trek</h5>
                      <span>999</span>
                    </div>
                    <h2>{date}</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="participant-info">
            <h3>How many participants?</h3>
            <div className="content-container">
              <form action="#" onSubmit={(e) => formHandle(e)}>
                <div className="participant-detials">
                  <div className="item">
                    <label htmlFor="adults">Adults</label>
                    <input
                      type="number"
                      name="adults"
                      id="adults"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          adults: e.target.value,
                        })
                      }
                      value={formData.adults}
                      required
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="family">Family</label>
                    <input
                      type="number"
                      name="family"
                      id="family"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          family: e.target.value,
                        })
                      }
                      value={formData.family}
                      required
                    />
                  </div>
                  <div className="item">
                    <label htmlFor="children">Children</label>
                    <input
                      type="number"
                      name="children"
                      id="children"
                      placeholder="*Below 6 years only"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          children: e.target.value,
                        })
                      }
                      value={formData.children}
                      required
                    />
                    <span>only below 6 years </span>
                  </div>
                </div>

                <div className="contact-detials">
                  <h4>Contact Detials</h4>
                  <p>Who do we communicate with about this booking?</p>
                  <div className="form-box">
                    <div className="item">
                      <label htmlFor="name">Full name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            fname: e.target.value,
                          })
                        }
                        value={formData.fname}
                      />
                    </div>
                    <div className="item">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="eamil"
                        required
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        value={formData.email}
                      />
                    </div>
                    <div className="item">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phone: e.target.value,
                          })
                        }
                        value={formData.phone}
                      />
                    </div>
                  </div>
                </div>
                <div className="additional-detials">
                  <h4>And these details as well</h4>
                  <p>Additional details we require to complete this booking</p>
                  <div className="item">
                    <label htmlFor="require">Health Requirement</label>
                    <textarea
                      name="require"
                      id=""
                      cols="50"
                      rows="10"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          requirements: e.target.value,
                        })
                      }
                      value={formData.requirements}
                    ></textarea>
                  </div>
                </div>
                <div className="comments">
                  <h4>Any special requests / comments?</h4>
                  <p>
                    Note: We try our best to accommodate special requests, but
                    it may not always be possible to fulfil them.
                  </p>
                  <input
                    type="text"
                    name="comments"
                    placeholder="Type your comments"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        comments: e.target.value,
                      })
                    }
                    value={formData.comments}
                  />
                </div>
                <div className="bottom">
                  <div className="price-box">
                    <h4>Total : 9999</h4>
                  </div>
                  <div className="button">
                    <input type="submit" value={"Submit"} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={`confirm-box-overlay ${isOpen ? "open" : ""}`}>
          <div className="confirm-box">
            <h3>Are you confirm?</h3>
            <table>
              <div className="item-box">
                <tr>
                  <td>Full Name : </td>
                  <td> {formData.fname}</td>
                </tr>
              </div>
              <div className="item-box">
                <tr>
                  <td>Email : </td>
                  <td> {formData.email}</td>
                </tr>
              </div>
              <div className="item-box">
                <tr>
                  <td>Phone : </td>
                  <td> {formData.phone}</td>
                </tr>
              </div>
              <div className="item-box">
                <tr>
                  <td>Adults : </td>
                  <td> {formData.adults}</td>
                </tr>
              </div>
              <div className="item-box">
                <tr>
                  <td>Children : </td>
                  <td> {formData.children}</td>
                </tr>
              </div>
              <div className="item-box">
                <tr>
                  <td>Family : </td>
                  <td> {formData.family}</td>
                </tr>
              </div>
              <div className="item-box">
                <tr>
                  <td>Requirements : </td>
                  <td> {formData.requirements}</td>
                </tr>
              </div>
              <div className="item-box">
                <tr>
                  <td>Comments : </td>
                  <td> {formData.comments}</td>
                </tr>
              </div>
            </table>
            <div className="item-box-date">
              <h4>{date} - 2 Day, 1 Night</h4>
            </div>
            <div className="button">
              <Link to="/traveler-info" className="back" onClick={toggleMenu}>
                Back
              </Link>
              <Link to="/">Confirm</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TravelerInfo;
