import React, { useState } from "react";
import "./DepartureInfo.css";
import Header from "../Header/Header";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function DepartureInfo() {
  const [date, setDate] = useState(format(new Date(), "dd MMM"));

  function handleDateChange(value) {
    setDate(`${format(value, "dd MMM")}`);
  }

  return (
    <>
      <Header />
      <section id="departure-info">
        <div className="wrapper">
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
                  <Link to="/traveler-info">Pay 999 and book</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
