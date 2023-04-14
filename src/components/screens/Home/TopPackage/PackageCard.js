import React, { useEffect } from "react";
import "./ToPackage.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchState } from "../../../../Redux/Home/state";

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
        <div className="image-box">
          <img src={item?.image} alt={item?.state} />
        </div>
        <div className="shade">
          <span>{item?.state}</span>
        </div>
      </li>
      )
    })}
      
    </>
  );
}

export default PackageCard;
