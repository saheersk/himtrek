import React from "react";
import "./Preferences.css";

import "react-tabs/style/react-tabs.css";
import PreferedPackage from "./PreferedPackage";
import CategoryTab from "./CategoryTab";

function Preferences() {
  return (
    <>
      <section id="preference">
        <div className="wrapper">
          <div className="head">
            <h3>customize your preference</h3>
          </div>
          <div className="content-container">
            <CategoryTab />
            <div className="content-cards">
              <PreferedPackage />
            </div>
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

export default Preferences;
