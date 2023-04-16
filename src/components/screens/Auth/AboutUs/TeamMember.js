import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";

function TeamMember() {
  return (
    <div>
      <div className="item">
        <div className="team-member">
          <img src={require("../../../assets/images/john.png")} alt="" />
        </div>
        <div className="text-box">
          <h5>John</h5>
          <p>Director</p>

          <Link to="https://www.google.com/" target="_blank">
            <img
              src={require("../../../assets/images/facebook.svg").default}
              alt=""
            />
          </Link>
          <Link to="https://www.google.com/" target="_blank">
            <img
              src={require("../../../assets/images/instagram.svg").default}
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
