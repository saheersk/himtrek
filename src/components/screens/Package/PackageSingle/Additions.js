import React from "react";
import "./PackageSingle.css";

function Additions() {
  return <>
     <div className="additions">
            <h5>INCLUSIONS/EXCLUSIONS</h5>
            <h2>What we'll give. What we won't</h2>
            <div className="container-item">
              <div className="item ">
                <h6>What is included in the tour</h6>
                <ul>
                  <li>
                    <img
                      src={require("../../../assets/images/tick.svg").default}
                      alt="Tick"
                    />
                    Accommodation on sharing basis.
                  </li>
                  <li>
                    <img
                      src={require("../../../assets/images/tick.svg").default}
                      alt="Tick"
                    />
                    Accommodation on sharing basis.
                  </li>
                  <li>
                    <img
                      src={require("../../../assets/images/tick.svg").default}
                      alt="Tick"
                    />
                    Accommodation on sharing basis.
                  </li>
                </ul>
              </div>
              <div className="item ">
                <h6>What is included in the tour</h6>
                <ul>
                  <li>
                    <img
                      src={require("../../../assets/images/cross.svg").default}
                      alt="Cross"
                    />
                    Accommodation on sharing basis.
                  </li>
                  <li>
                    <img
                      src={require("../../../assets/images/cross.svg").default}
                      alt="Cross"
                    />
                    Accommodation on sharing basis.
                  </li>
                  <li>
                    <img
                      src={require("../../../assets/images/cross.svg").default}
                      alt="Cross"
                    />
                    Accommodation on sharing basis.
                  </li>
                </ul>
              </div>
            </div>
          </div>
  </>;
}

export default Additions;
