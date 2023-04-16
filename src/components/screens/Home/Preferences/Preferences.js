import React from "react";
import "./Preferences.css";

import "react-tabs/style/react-tabs.css";

import { Link } from "react-router-dom";

import PreferredPackage from "./PreferredPackage";
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
              <PreferredPackage />
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

export default Preferences;
