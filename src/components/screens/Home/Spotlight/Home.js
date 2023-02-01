import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "../../Header/Header";
import About from "../About/About";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AOS from "aos";
import "aos/dist/aos.css";
import TopPackage from "../TopPackage/TopPackage";
import Events from "../Events/Events";
import PackageList from "../PackageList/PackageList";
import Preferences from "../Preferences/Preferences";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <section id="home">
        <Header />
        <section id="spotlight">
          <div className="wrapper">
            <div className="content-box">
              <h3 data-aos="fade-up">
                Discover New Destinations<span>...</span>
              </h3>
              <p data-aos="fade-up" data-aos-delay="200">
                A team devoted and experienced tourism professionals will
                provide you with the best advice and tips.
              </p>
              <div
                className="filter-box"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="items">
                  <div className="item">
                    <h5>
                      location{" "}
                      <div className="icon">
                        <img
                          src={require("../../../assets/images/angle-up-solid.png")}
                          alt=""
                        />
                      </div>
                    </h5>
                    <select name="" id="location">
                      <option value="india">Kerala</option>
                      <option value="india">Delhi</option>
                      <option value="india">Tamilnadu</option>
                    </select>
                  </div>
                  <div className="item">
                    <h5>
                      date{" "}
                      <div className="icon">
                        <img
                          src={require("../../../assets/images/angle-up-solid.png")}
                          alt=""
                        />
                      </div>
                    </h5>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
                <div className="button">
                  <span>explore</span>
                </div>
              </div>
              <div
                className="branding-text"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <p>
                  Make Your Tour <span> Amazing!</span>{" "}
                </p>
              </div>
            </div>
            <div className="image-container">
              <img
                src={require("../../../assets/images/hero-image.png")}
                alt="Hero"
              />
            </div>
          </div>
        </section>
      </section>
      <About />
      <TopPackage />
      <Events />
      <PackageList />
      <Preferences />
    </>
  );
}

export default Home;
