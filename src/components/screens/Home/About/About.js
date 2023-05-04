import React, { memo, useEffect } from "react";
import "./About.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section id="about">
        <div className="head">
          <h3>about us</h3>
        </div>
        <div className="wrapper">
          <div className="text-container">
            <p data-aos="fade-up">
              Himtrek is a family of passionate travel enthusiasts who come
              together to provide India's best treks, vacations, stays, and
              more. We guarantee one in a million kinds of experiences,
              adrenaline rush like never before, and memories of a lifetime. We
              believe in providing the utmost adventure with a tint of homely
              vibes! Come, dwell with us along the open skies and shake hands
              with nature, wildlife, treks, adventure expeditions, and
              everything crazy!
            </p>
            <ul className="cards">
              <li data-aos="fade-up">
                <h4>10K+</h4>
                <span>success trips</span>
              </li>
              <li data-aos="fade-up" data-aos-delay="100">
                <h4>16+</h4>
                <span>awards wins</span>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <h4>6+</h4>
                <span>year of experience</span>
              </li>
            </ul>
            <Link to="/about-us">
              <button>
                {" "}
                more about{" "}
                <img
                  src={require("../../../assets/images/arrow-right-solid.png")}
                  alt="Arrow"
                />
              </button>
            </Link>
          </div>
          <div className="image-container">
            <div className="hero-image">
              <img
                src={require("../../../assets/images/about-us-1.jpg")}
                alt="About"
              />
            </div>
            <div className="image-row">
              <div className="top-image preview" data-aos="fade-up">
                <img
                  src={require("../../../assets/images/about-us-2.jpg")}
                  alt="About"
                />
              </div>
              <div className="bottom-image preview" data-aos="fade-up">
                <img
                  src={require("../../../assets/images/about-us-3.jpg")}
                  alt="About"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(About);
