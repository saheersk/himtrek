import React from "react";
import Header from "../Header/Header";

import "./Discover.css";

function Discover() {
  return (
    <>
      <Header />
      <section id="discover">
        <div className="wrapper">
          <div className="head">
            <h4>find & book your ideal trip</h4>
          </div>
          <div className="content-box">
            <div className="main-city">
              <div className="cards">
                <div className="city-item">
                  <div className="image-box">
                    <img
                      src={require("../../assets/images/mumbai.png")}
                      alt="Images"
                    />
                  </div>
                  <span>Mumbai</span>
                </div>
                <div className="city-item">
                  <div className="image-box">
                    <img
                      src={require("../../assets/images/mumbai.png")}
                      alt="Images"
                    />
                  </div>
                  <span>Mumbai</span>
                </div>
                <div className="big-item">
                  <div className="image-box">
                    <img
                      src={require("../../assets/images/mumbai.png")}
                      alt="Images"
                    />
                  </div>
                  <span>Mumbai</span>
                </div>
              </div>
              <div className="cards">
                <div className="big-item">
                  <div className="image-box">
                    <img
                      src={require("../../assets/images/mumbai.png")}
                      alt="Images"
                    />
                  </div>
                  <span>Mumbai</span>
                </div>
                <div className="city-item">
                  <div className="image-box">
                    <img
                      src={require("../../assets/images/mumbai.png")}
                      alt="Images"
                    />
                  </div>
                  <span>Mumbai</span>
                </div>
                <div className="city-item">
                  <div className="image-box">
                    <img
                      src={require("../../assets/images/mumbai.png")}
                      alt="Images"
                    />
                  </div>
                  <span>Mumbai</span>
                </div>
              </div>
            </div>
          </div>
          <div className="button">
            <span>
              explore{" "}
              <img
                src={require("../../assets/images/arrow-right-solid.png")}
                alt="Arrow"
              />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Discover;
