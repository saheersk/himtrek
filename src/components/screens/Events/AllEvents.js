import React from "react";
import Header from "../Header/Header";
import EventCard from "./EventCard";
import "./AllEvents.css";

function AllEvents() {
  return (
    <>
      <Header />
      <section id="events">
        <div className="wrapper">
          <div className="head">
            <h3>All Events</h3>
          </div>
          <ul className="events container">
            <EventCard />
          </ul>
        </div>
      </section>
    </>
  );
}

export default AllEvents;
