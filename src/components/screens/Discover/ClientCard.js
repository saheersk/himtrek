import React from "react";
import "./Discover.css";

function ClientCard() {
  return (
    <>
      <div className="client-card">
        <div className="avatar">
          <img src={require("../../assets/images/client.png")} alt="Arrow" />
        </div>
        <div className="text-box">
          <h4>john doe</h4>
          <span>
            <img
              src={require("../../assets/images/loc.svg").default}
              alt="Arrow"
            />
            karnataka
          </span>
          <h5>visited : Banglore</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut,
            voluptatibus?
          </p>
          <small>Rating : 4.5</small>
        </div>
      </div>
    </>
  );
}

export default ClientCard;
