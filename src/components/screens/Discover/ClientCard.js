import React, { useEffect } from "react";
import "./Discover.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchReview } from "../../../Redux/Discover/clientCard";

function ClientCard() {
  const dispatch = useDispatch();
  const review = useSelector((state) => state.review.review);

  useEffect(() => {
    dispatch(fetchReview());
  }, [dispatch]);

  return (
    <>
    {review.map((item) => {
      return (
        <div className="client-card" key={item?.id}>
        <div className="avatar">
          <img src={require("../../assets/images/client.png")} alt="Arrow" />
        </div>
        <div className="text-box">
          <h4>{item?.first_name}{item?.last_name}</h4>
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

export default ClientCard;
