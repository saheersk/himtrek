import React, { useEffect } from "react";
import "./ToPackage.css";

import AOS from "aos";
import "aos/dist/aos.css";
import PackageCard from "./PackageCard";

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
              <PackageCard />
              <PackageCard />
              <PackageCard />
              <PackageCard />
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
