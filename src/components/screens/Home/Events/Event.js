import React from "react";
import { useEvent } from "../../../../Redux/Home/event";
import "./Events.css";

function Event() {
  // const dispatch = useDispatch();
  // const event = useSelector((event) => event.event.events);

  // useEffect(() => {
  //   dispatch(fetchEvent());
  // }, [dispatch]);

  const { data: event = [] } = useEvent();

  return (
    <>
      {event?.map((event) => {
        return (
          <li key={event?.id} className="xs-card">
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
