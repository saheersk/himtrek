import React from "react";
import "./ToPackage.css";

function PackageCard() {
  return (
    <>
      <li data-aos="fade-up">
        <div className="image-box">
          <img src={require("../../../assets/images/all-india.png")} alt="" />
        </div>
        <div className="shade">
          <span>explore</span>
        </div>
      </li>
    </>
  );
}

export default PackageCard;
