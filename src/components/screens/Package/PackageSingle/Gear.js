import React from "react";
import "./PackageSingle.css";

function Gear() {
  return (
    <>
      <div className="slide-container">
        <div className="wrapper">
          <h5>We provide rental products</h5>
          <div className="slide">
            <div className="item">
              <div className="product-img">
                <img
                  src={require("../../../assets/images/gopro.png")}
                  alt="Gopro"
                />
              </div>
              <h6>GoPro Hero 7</h6>
              <span>₹10000 / Day</span>
              <button>Add with Package</button>
            </div>
            <div className="item">
              <div className="product-img">
                <img
                  src={require("../../../assets/images/gopro.png")}
                  alt="Gopro"
                />
              </div>
              <h6>GoPro Hero 7</h6>
              <span>₹10000 / Day</span>
              <button>Add with Package</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gear;
