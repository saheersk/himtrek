import React, { memo, useEffect } from "react";
import "./TopPackage.css";

import AOS from "aos";
import "aos/dist/aos.css";
import PackageCard from "./PackageCard";
import { Link } from "react-router-dom";

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
            <div className="top-package-container">
              <PackageCard />
            </div>
          </div>
          <Link to="/result/">
            <div className="button">
              <h5>explore</h5>
              <small>
                <img
                  src={require("../../../assets/images/arrow-right-solid.png")}
                  alt="Arrow"
                />
              </small>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default memo(TopPackage);
