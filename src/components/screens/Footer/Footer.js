import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section id="footer">
        <div className="wrapper">
          <div className="top-container">
            <div className="left-container">
              <div className="logo-box">
                <img
                  src={require("../../assets/images/himtrek-logo.svg").default}
                  alt="Circle"
                />
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
            <div className="right-container">
              <h4>contact</h4>
              <hr />
              <span>hello@himtrek.com</span>
              <span>+91 999 999 999</span>
            </div>
          </div>
          <div className="link-container">
            <div className="inter-links">
              <div className="nav-links">
                <div className="item">
                  <h5>quick links</h5>
                  <span>
                    <Link to="/about-us">about</Link>
                  </span>
                  <span>
                    <Link to="/discover">discover</Link>
                  </span>
                  <span>
                    <Link to="/packages">packages</Link>
                  </span>
                  <span>
                    <Link to="/contact">contact</Link>
                  </span>
                </div>
                <div className="item">
                  <h5>privacy</h5>
                  <span>
                    <Link to="/cancellation/">cancellation policy</Link>
                  </span>

                  <span>
                    <Link to="/privacy/">privacy policy</Link>
                  </span>
                </div>
                <div className="item">
                  <h5>others</h5>
                  <span>
                    <Link to="/cancellation/">cancellation policy</Link>
                  </span>

                  <span>
                    <Link to="/privacy/">privacy policy</Link>
                  </span>
                </div>
              </div>
              <div className="item foot-print">
                <h5>our footprints</h5>
                <ul>
                  <li>
                    <img
                      src={require("../../assets/images/footprint-gallery.png")}
                      alt="Circle"
                    />
                  </li>
                  <li>
                    <img
                      src={require("../../assets/images/footprint-gallery.png")}
                      alt="Circle"
                    />
                  </li>
                  <li>
                    <img
                      src={require("../../assets/images/footprint-gallery.png")}
                      alt="Circle"
                    />
                  </li>
                  <li>
                    <img
                      src={require("../../assets/images/footprint-gallery.png")}
                      alt="Circle"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="social">
              <span>
                {" "}
                <img
                  src={require("../../assets/images/instagram.svg").default}
                  alt="Social"
                />
              </span>
              <span>
                {" "}
                <img
                  src={require("../../assets/images/facebook.svg").default}
                  alt="Social"
                />
              </span>
              <span>
                {" "}
                <img
                  src={require("../../assets/images/twitter.svg").default}
                  alt="Social"
                />
              </span>
            </div>
          </div>

          <span className="copyright">
            &copy; Copyright 2023 HimTrek. All Right Reserved. Designed by{" "}
            <small>Hex Dev</small>
          </span>
        </div>
      </section>
    </>
  );
}

export default Footer;
