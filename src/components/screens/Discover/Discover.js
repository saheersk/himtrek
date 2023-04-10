import React from "react";
import Header from "../Header/Header";
import Carousel from "react-elastic-carousel";

import "./Discover.css";
import Footer from "../Footer/Footer";

function Discover() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
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
            <Carousel
              itemsToShow={3}
              enableSwipe={true}
              enableAutoPlay={true}
              breakPoints={breakPoints}
            >
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
            </Carousel>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Discover;
