import React from "react";
import Header from "../Header/Header";
import "./TravelerInfo.css";
import { Link } from "react-router-dom";

function TravelerInfo() {
  return (
    <>
      <section id="traveler-info">
        <Header />
        <div className="wrapper">
          <div className="participant-info">
            <h3>How many participants?</h3>
            <div className="content-container">
              <form action="#">
                <div className="item">
                  <label htmlFor="adults">Adults</label>
                  <input type="number" name="adults" id="adults" />
                </div>
                <div className="item">
                  <label htmlFor="family">Family</label>
                  <input type="number" name="family" id="family" />
                </div>
                <div className="item">
                  <label htmlFor="children">Children</label>
                  <input type="number" name="children" id="children" />
                </div>
              </form>

              <div className="contact-detials">
                <h4>Contact Detials</h4>
                <p>Who do we communicate with about this booking?</p>
                <form action="#">
                  <div className="item">
                    <label htmlFor="name">Full name</label>
                    <input type="text" name="name" id="name" required />
                  </div>
                  <div className="item">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="eamil" required />
                  </div>
                  <div className="item">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" name="phone" id="phone" required />
                  </div>
                </form>
              </div>
              <div className="additional-detials">
                <h4>And these details as well</h4>
                <p>Additional details we require to complete this booking</p>
                <form action="#">
                  <div className="item">
                    <label htmlFor="require">Health Requirement</label>
                    <textarea
                      name="require"
                      id=""
                      cols="50"
                      rows="10"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="comments">
                <h4>Any special requests / comments?</h4>
                <p>
                  Note: We try our best to accommodate special requests, but it
                  may not always be possible to fulfil them.
                </p>
                <form action="#">
                  <input
                    type="text"
                    name="comments"
                    placeholder="Type your comments"
                  />
                </form>
              </div>
              <div className="bottom">
                <div className="price-box">
                  <h4>Total : 9999</h4>
                </div>
                <div className="button">
                  <Link to="/">Review & Payment</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TravelerInfo;
