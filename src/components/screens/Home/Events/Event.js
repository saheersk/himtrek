import React, { memo } from "react";
import { useEvent } from "../../../../Redux/Home/event";
import "./Events.css";

function Event() {
  const { data: event = [] } = useEvent();

  return (
    <>
      {event?.map((event) => {
        return (
          <li data-aos="fade-up" key={event?.id} className="xs-card">
            <div className="preview">
              <img src={event?.image} alt={event?.title} />
            </div>
            <div className="text-container">
              <div className="text box">
                <h4>{event?.title}</h4>
              </div>
              <div className="date">
                <span>{event?.added_date}</span>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
}

export default memo(Event);
