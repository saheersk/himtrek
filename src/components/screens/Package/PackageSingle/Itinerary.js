import React, { useEffect } from "react";
import "./PackageSingle.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchItinerary } from "../../../../Redux/Package/itinerary";

function Itinerary({ slug }) {
  const dispatch = useDispatch();
  const itinerary = useSelector((state) => state.itinerary.itineraries);

  useEffect(() => {
    dispatch(fetchItinerary(slug));
  }, [slug, dispatch]);

  return (
    <>
      <div className="bottom">
        <h5>Itinerary</h5>
        {itinerary.map((item) => {
          return (
            <div className="activities" key={item?.id}>
            <h6>{item?.title}</h6>
            <span>
            {item?.details_of_trip}
            </span>
            <p>
              {item?.description}
              </p>
          </div>
          )
        })}
        
      </div>
    </>
  );
}

export default Itinerary;
