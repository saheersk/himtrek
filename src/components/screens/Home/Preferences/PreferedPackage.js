import React from "react";
import "./Preferences.css";

import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";

function PreferedPackage() {
  return (
    <>
      <div className="card">
        <Link to="/">
          <div className="image-box">
            <img
              src={require("../../../assets/images/prefered-package.png")}
              alt="Package"
            />
          </div>
          <div className="text-box">
            <h4>harihar fort</h4>
            <div className="location">
              <img
                src={require("../../../assets/images/location.svg").default}
                alt="Package"
              />
              <span>tamilnadu</span>
            </div>
            <div className="price">
              <span>$600</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default PreferedPackage;
