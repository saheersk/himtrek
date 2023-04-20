import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";
import About from "../About/About";
import "react-datepicker/dist/react-datepicker.css";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import TopPackage from "../TopPackage/TopPackage";
import Events from "../Events/Events";
import PackageList from "../PackageList/PackageList";
import Preferences from "../Preferences/Preferences";
import Workspace from "../Workspace/Workspace";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { usePlace } from "../../../../Redux/Home/state";
import "./Home.css";

function Home() {
  const { data: places } = usePlace();

  const [state, setState] = useState("");
  const [month, setMonth] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/result/?state=${state}&month=${month}`);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section id="home">
        <Header />
        <section id="spotlight">
          <div className="wrapper">
            <div className="content-box">
              <h3 data-aos="fade-up">
                Discover New{" "}
                <Typewriter
                  options={{
                    strings: [
                      "Destinations...",
                      "Trips...",
                      "Vibes...",
                      "Trek...",
                      "Adventure...",
                    ],
                    pauseFor: 3000,
                    autoStart: true,
                    loop: true,
                  }}
                />
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
                <form action="" onSubmit={(e) => handleSubmit(e)}>
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
                      <select
                        name="state"
                        id="location"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      >
                        <option value="">Select State</option>
                        {places?.map((item, key) => {
                          return (
                            <option key={key} value={item?.state}>
                              {item?.state}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="item">
                      <h5>
                        Month{" "}
                        <div className="icon">
                          <img
                            src={require("../../../assets/images/angle-up-solid.png")}
                            alt=""
                          />
                        </div>
                      </h5>
                      <select
                        name="month"
                        id="location"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                      >
                        <option value="">Select Month</option>
                        <option value="April">April</option>
                        <option value="March">March</option>
                      </select>
                    </div>
                  </div>
                  <div className="button">
                    <button type="submit">explore</button>
                  </div>
                </form>
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
      <Workspace />
      <Footer />
    </>
  );
}

export default Home;
