import React, { memo } from "react";
import Event from "./Event";
import "./Events.css";
import { Link } from "react-router-dom";

function Events() {
  
  return (
    <>
      <section id="events">
        <div className="wrapper">
          <div className="head">
            <h3>upcoming events</h3>
          </div>
          <div className="content">
            <ul>
              <Event />
            </ul>
          </div>
          <div className="button">
            <Link to="/all-events/">
              <h5>explore</h5>
              <small>
                <img
                  src={require("../../../assets/images/arrow-right-solid.png")}
                  alt="Arrow"
                />
              </small>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Events);
