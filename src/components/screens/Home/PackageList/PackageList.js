import React from "react";
import "./PackageList.css";

function PackageList() {
  return (
    <>
      <section id="package-list">
        <div className="wrapper">
          <div className="head">
            <h3>checkout our packages</h3>
          </div>
          <div className="package-box">
            <div className="package">
              <div className="left-box">
                <div className="image-box">
                  <img
                    src={require("../../../assets/images/all-india.png")}
                    alt="Package"
                  />
                </div>
                <div className="text-box">
                  <h3>thajmahal and delhi</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sapiente sit vitae corporis consequatur voluptatibus harum.
                  </p>
                  <ul>
                    <li>
                      <li className="time">
                        {" "}
                        <img
                          src={
                            require("../../../assets/images/clock.svg").default
                          }
                          alt="Package"
                        />
                        <span>7 Days</span>
                      </li>
                      <li className="persons">
                        <img
                          src={
                            require("../../../assets/images/user.svg").default
                          }
                          alt="Package"
                        />
                        <span>7 persons</span>
                      </li>
                      <li className="location">
                        <span>India</span>
                      </li>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="price">
                <h4>1000</h4>
                <img
                  src={require("../../../assets/images/cart.svg").default}
                  alt="Package"
                />
              </div>
            </div>
            <div className="package">
              <div className="left-box">
                <div className="image-box">
                  <img
                    src={require("../../../assets/images/all-india.png")}
                    alt="Package"
                  />
                </div>
                <div className="text-box">
                  <h3>thajmahal and delhi</h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sapiente sit vitae corporis consequatur voluptatibus harum.
                  </p>
                  <ul>
                    <li>
                      <li className="time">
                        {" "}
                        <img
                          src={
                            require("../../../assets/images/clock.svg").default
                          }
                          alt="Package"
                        />
                        <span>7 Days</span>
                      </li>
                      <li className="persons">
                        <img
                          src={
                            require("../../../assets/images/user.svg").default
                          }
                          alt="Package"
                        />
                        <span>7 persons</span>
                      </li>
                      <li className="location">
                        <span>India</span>
                      </li>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="price">
                <h4>1000</h4>
                <img
                  src={require("../../../assets/images/cart.svg").default}
                  alt="Package"
                />
              </div>
            </div>
          </div>
          <div className="button">
            <span>view all packages</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default PackageList;
