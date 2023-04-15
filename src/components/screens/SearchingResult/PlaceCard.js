import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SearchingResult.css";
import { fetchPackage } from "../../../Redux/Home/package";
import { useLocation } from "react-router-dom";

function PlaceCard() {
  const dispatch = useDispatch();
  const package_item = useSelector((package_item) => package_item.package.packages);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const state = params.get('state');
  const month = params.get('month');
  const city = params.get('city');

  useEffect(() => {
    dispatch(fetchPackage({month: month, state: state, city: city}));

  }, [dispatch, month, state, city]);

  return (
    <>
    {package_item.map((item) => {
      return (
        <div className="place-card" key={item?.id}>
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
              <small>₹</small> {item?.price_for_adult} / Person
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
