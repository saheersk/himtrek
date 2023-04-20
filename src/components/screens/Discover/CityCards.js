import React from "react";
import { useCity } from "../../../Redux/Home/city";
import { useNavigate } from "react-router-dom";
import "./Discover.css";

function CityCards() {
  const { data: cities = [] } = useCity();

  const navigate = useNavigate();

  const handleCity = (title) => {
    console.log(title);
    navigate(`/result/?city=${title}`);
  };

  return (
    <>
      <div className="cards">
        {cities?.map((item) => {
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
