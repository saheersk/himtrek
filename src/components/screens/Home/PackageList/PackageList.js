import React from "react";
import Package from "./Package";
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
            <span>view all packages</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default PackageList;
