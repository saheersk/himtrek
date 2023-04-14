import React from "react";
import Event from "./Event";
import "./Events.css";

function Events() {
  return (
    <>
      <section id="events">
        <div className="wrapper">
          <div className="head">
            <h3>upcomming events</h3>
          </div>
          <div className="content">
            <ul>
              <Event />
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

export default Events;
