import React from "react";
import { useItinerary } from "../../../../Redux/Package/itinerary";
import "./PackageSingle.css";

function Itinerary({ slug }) {
  const { data: itinerary = [] } = useItinerary({ slug : slug });

  return (
    <>
      <div className="bottom">
        <h5>Itinerary</h5>
        {itinerary?.map((item) => {
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
