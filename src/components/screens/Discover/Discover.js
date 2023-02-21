import React from "react";
import Header from "../Header/Header";

import "./Discover.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Discover() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
      <section id="client-box">
        <div className="wrapper">
          <div className="head">
            <h4>
              our happy <span>travelers</span>
            </h4>
          </div>
          <ul className="client-slider">
            <Slider {...settings}>
              <li>
                <div className="avatar">
                  <img
                    src={require("../../assets/images/client.png")}
                    alt="Arrow"
                  />
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ut, voluptatibus?
                  </p>
                  <small>Rating : 4.5</small>
                </div>
              </li>
              <li>
                <div className="avatar">
                  <img
                    src={require("../../assets/images/client.png")}
                    alt="Arrow"
                  />
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ut, voluptatibus?
                  </p>
                  <small>Rating : 4.5</small>
                </div>
              </li>
              <li>
                <div className="avatar">
                  <img
                    src={require("../../assets/images/client.png")}
                    alt="Arrow"
                  />
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ut, voluptatibus?
                  </p>
                  <small>Rating : 4.5</small>
                </div>
              </li>
              <li>
                <div className="avatar">
                  <img
                    src={require("../../assets/images/client.png")}
                    alt="Arrow"
                  />
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ut, voluptatibus?
                  </p>
                  <small>Rating : 4.5</small>
                </div>
              </li>
            </Slider>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Discover;
