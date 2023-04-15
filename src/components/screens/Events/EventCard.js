import React from "react";
import "./AllEvents.css";

function EventCard() {
  return (
    <>
      <li>
        <div className="preview">
          <img
            src={require("../../assets/images/workspace1.jpg")}
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

export default EventCard;
