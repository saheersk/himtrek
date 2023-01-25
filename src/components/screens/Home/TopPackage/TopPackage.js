import React, { useEffect } from "react";
import "./ToPackage.css";

import AOS from "aos";
import "aos/dist/aos.css";

function TopPackage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section id="top-package">
        <div className="wrapper">
          <div className="head">
            <h3>let’s plan your next trip!</h3>
          </div>
          <div className="content">
            <ul>
              <li data-aos="fade-up">
                <div className="image-box">
                  <img
                    src={require("../../../assets/images/all-india.png")}
                    alt=""
                  />
                </div>
                <div className="shade">
                  <span>explore</span>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <div className="image-box">
                  <img
                    src={require("../../../assets/images/all-india.png")}
                    alt=""
                  />
                </div>
                <div className="shade">
                  <span>explore</span>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <div className="image-box">
                  <img
                    src={require("../../../assets/images/all-india.png")}
                    alt=""
                  />
                </div>
                <div className="shade">
                  <span>explore</span>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <div className="image-box">
                  <img
                    src={require("../../../assets/images/all-india.png")}
                    alt=""
                  />
                </div>
                <div className="shade">
                  <span>explore</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="button">
            <h5>explore</h5>
            <small>
              <img
                src={require("../../../assets/images/arrow-right-solid.png")}
                alt="Arrow"
              />
            </small>
          </div>
        </div>
      </section>
    </>
  );
}

export default TopPackage;
