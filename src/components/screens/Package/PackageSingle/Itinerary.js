import React, { memo, useContext } from "react";
import { useItinerary } from "../../../../Redux/Package/itinerary";
import "./PackageSingle.css";
import { SlugContext } from "./PackageSingle";

function Itinerary() {
  const param = useContext(SlugContext);

  const { data: itinerary = [] } = useItinerary({ slug : param });

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

export default memo(Itinerary);
