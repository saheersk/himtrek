import React from "react";
import Package from "./Package";
import { Link } from "react-router-dom";
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
            <Package />
          </div>
          <div className="button">
            <Link to="/result/">
              <span>view all packages</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default PackageList;
