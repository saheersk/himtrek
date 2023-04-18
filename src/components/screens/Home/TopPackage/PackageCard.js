import React, { useEffect } from "react";
import "./TopPackage.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchState } from "../../../../Redux/Home/state";
import { Link } from "react-router-dom";

function PackageCard() {
  const dispatch = useDispatch();
  const states = useSelector((state) => state.state.states);
  // const status = useSelector((state) => state.states.status);
  // const error = useSelector((state) => state.states.error);

  useEffect(() => {
    dispatch(fetchState());
  }, [dispatch]);
  
  return (
    <>
    {states.map((item) =>{
      return (
        <li data-aos="fade-up" key={item?.id}>
          <Link to={`/result/?state=${item?.state}`}>
        <div className="image-box">
          <img src={item?.image} alt={item?.state} />
        </div>
        <div className="shade">
          <span>{item?.state}</span>
        </div>
      </Link>
      </li>
      )
    })}
      
    </>
  );
}

export default PackageCard;
