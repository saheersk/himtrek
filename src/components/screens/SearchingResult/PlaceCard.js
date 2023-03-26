import React from "react";

import "./SearchingResult.css";

function PlaceCard() {
  return (
    <>
      <div className="place-card">
        <div className="image-box">
          <img
            src={require("../../assets/images/about-us-3.jpg")}
            alt="Images"
          />
        </div>
        <div className="text-box">
          <h4>Ooty</h4>
          <span>Tamilnadu</span>
          <div className="bottom-box">
            <span>
              <small>₹</small> 6000 / Person
            </span>
            <small className="button">Book Now</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaceCard;
