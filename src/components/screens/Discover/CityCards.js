import React from "react";
import "./Discover.css";

function CityCards() {
  return (
    <>
      <div className="cards">
        <div className="city-item">
          <div className="image-box">
            <img src={require("../../assets/images/mumbai.png")} alt="Images" />
          </div>
          <span>Mumbai</span>
        </div>
        <div className="city-item">
          <div className="image-box">
            <img src={require("../../assets/images/mumbai.png")} alt="Images" />
          </div>
          <span>Mumbai</span>
        </div>
        <div className="big-item">
          <div className="image-box">
            <img src={require("../../assets/images/mumbai.png")} alt="Images" />
          </div>
          <span>Mumbai</span>
        </div>
      </div>
    </>
  );
}

export default CityCards;
