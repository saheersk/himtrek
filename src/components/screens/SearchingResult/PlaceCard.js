import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SearchingResult.css";
import { fetchPackage } from "../../../Redux/Home/package";

function PlaceCard() {
  const dispatch = useDispatch();
  const package_item = useSelector((package_item) => package_item.package.packages);

  useEffect(() => {
    dispatch(fetchPackage());
  }, [dispatch]);

  return (
    <>
    {package_item.map((item) => {
      return (
        <div className="place-card">
        <div className="image-box">
          <img
            src={item?.image}
            alt={item?.title}
          />
        </div>
        <div className="text-box">
          <h4>{item?.title}</h4>
          <span>{item?.state}</span>
          <div className="bottom-box">
            <span>
              <small>₹</small> {item?.price} / Person
            </span>
            <small className="button">Book Now</small>
          </div>
        </div>
      </div>
      )
    })}
      
    </>
  );
}

export default PlaceCard;
