import React, { useEffect } from "react";
import "./Events.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvent } from "../../../../Redux/Home/event";

function Event() {
  const dispatch = useDispatch();
  const event = useSelector((event) => event.event.events);

  useEffect(() => {
    dispatch(fetchEvent());
  }, [dispatch]);

  return (
    <>
      {event.map((event) => {
        return (
          <li data-aos="fade-up" key={event?.id}>
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

export default Event;
