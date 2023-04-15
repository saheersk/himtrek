import React, { useEffect } from "react";
import "./Discover.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCity } from "../../../Redux/Home/city";
import { useNavigate } from "react-router-dom";

function CityCards() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.city.cities);

  useEffect(() => {
    dispatch(fetchCity());
  }, [dispatch]);

  const navigate = useNavigate();

  const handleCity = (title) => {
    console.log(title);
    navigate(`/result/?city=${title}`);
  };

  return (
    <>
      <div className="cards">
        {cities.map((item) => {
          return (
            <div onClick={() => handleCity(item?.city) }  className="city-item" key={item?.id}>
          <div className="image-box">
            <img src={item?.image} alt={item?.city} />
          </div>
          <span>{item?.city}</span>
        </div>
          )
        })}
      </div>
    </>
  );
}

export default CityCards;
