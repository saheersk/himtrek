import React from "react";
import { useEvent } from "../../../Redux/Home/event";
import "./AllEvents.css";

function EventCard() {
  const { data: event = [] } = useEvent();

  return (
    <>
    {event?.map((item) => {
      return (
        <li key={item?.id}>
        <div className="preview">
          <img
            src={item?.image}
            alt={item?.title}
          />
        </div>
        <div className="text-container">
          <div className="text box">
            <h4>{item?.title}</h4>
            <p>
            {item?.description}
            </p>
          </div>
          <div className="date">
            <span>{item?.added_date}</span>
          </div>
        </div>
      </li>
      )
    })}
      
    </>
  );
}

export default EventCard;
