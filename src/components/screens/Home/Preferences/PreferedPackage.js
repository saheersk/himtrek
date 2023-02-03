import React from "react";
import "./Preferences.css";

import "react-tabs/style/react-tabs.css";

function PreferedPackage() {
  return (
    <>
      <div className="card">
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
      </div>
    </>
  );
}

export default PreferedPackage;
