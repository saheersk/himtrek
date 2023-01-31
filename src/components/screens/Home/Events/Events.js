import React from "react";
import "./Events.css";

function Events() {
  return (
    <>
      <section id="events">
        <div className="wrapper">
          <div className="head">
            <h3>upcomming events</h3>
          </div>
          <div className="content">
            <ul>
              <li data-aos="fade-right">
                <div className="preview">
                  <img
                    src={require("../../../assets/images/event.png")}
                    alt="Preview"
                  />
                </div>
                <div className="text-container">
                  <div className="text box">
                    <h4>Kakkadampoyil</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo, nulla!
                    </p>
                  </div>
                  <div className="date">
                    <span>Dec</span>
                    <small>21</small>
                  </div>
                </div>
              </li>
              <li data-aos="fade-left">
                <div className="preview">
                  <img
                    src={require("../../../assets/images/event.png")}
                    alt="Preview"
                  />
                </div>
                <div className="text-container">
                  <div className="text box">
                    <h4>Kakkadampoyil</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo, nulla!
                    </p>
                  </div>
                  <div className="date">
                    <span>Dec</span>
                    <small>21</small>
                  </div>
                </div>
              </li>
              <li data-aos="fade-right" data-aos-delay="100">
                <div className="preview">
                  <img
                    src={require("../../../assets/images/event.png")}
                    alt="Preview"
                  />
                </div>
                <div className="text-container">
                  <div className="text box">
                    <h4>Kakkadampoyil</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo,
                    </p>
                  </div>
                  <div className="date">
                    <span>Dec</span>
                    <small>21</small>
                  </div>
                </div>
              </li>
              <li data-aos="fade-left" data-aos-delay="100">
                <div className="preview">
                  <img
                    src={require("../../../assets/images/event.png")}
                    alt="Preview"
                  />
                </div>
                <div className="text-container">
                  <div className="text box">
                    <h4>Kakkadampoyil</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo,
                    </p>
                  </div>
                  <div className="date">
                    <span>Dec</span>
                    <small>21</small>
                  </div>
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

export default Events;
