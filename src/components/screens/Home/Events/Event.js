import React from "react";
import "./Events.css";

function Event() {
  return (
    <>
      <li data-aos="fade-up">
        <div className="preview">
          <img
            src={require("../../../assets/images/event.png")}
            alt="Preview"
          />
        </div>
        <div className="text-container">
          <div className="text box">
            <h4>Kakkadampoyil</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              nulla!
            </p>
          </div>
          <div className="date">
            <span>Dec</span>
            <small>21</small>
          </div>
        </div>
      </li>
    </>
  );
}

export default Event;
