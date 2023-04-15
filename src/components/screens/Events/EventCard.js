import React, { useEffect } from "react";
import "./AllEvents.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvent } from "../../../Redux/Home/event";

function EventCard() {
  const dispatch = useDispatch();
  const event = useSelector((event) => event.event.events);

  useEffect(() => {
    dispatch(fetchEvent());
  }, [dispatch]); 

  return (
    <>
    {event.map((item) => {
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
