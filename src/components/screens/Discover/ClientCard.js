import React, { memo } from "react";
import { useReview } from "../../../Redux/Discover/clientCard";
import "./Discover.css";

function ClientCard() {
  const { data: review = [] } = useReview();

  return (
    <>
    {review?.map((item) => {
      return (
        <div className="client-card" key={item?.id}>
        <div className="avatar">
          <img src={require("../../assets/images/client.png")} alt="Arrow" />
        </div>
        <div className="text-box">
          <h4>{item?.first_name} {item?.last_name}</h4>
          <span>
            <img
              src={require("../../assets/images/loc.svg").default}
              alt="Arrow"
            />
            {item?.your_city}
          </span>
          <h5>visited : {item?.visited_place}</h5>
          <p>
            {item?.review_message}
          </p>
          <small>Rating : {item?.rating}</small>
        </div>
      </div>
      )
    })}
      
    </>
  );
}

export default memo(ClientCard);
