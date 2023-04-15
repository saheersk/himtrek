import React, { useEffect } from "react";
import "./Preferences.css";

import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPackage } from "../../../../Redux/Home/package";

function PreferredPackage() {
  const dispatch = useDispatch();
  const package_item = useSelector(
    (package_item) => package_item.package.packages
  );

  useEffect(() => {
    dispatch(fetchPackage());
  }, [dispatch]);

  return (
    <>
      {package_item.map((item) => {
        return (
          <div className="card" key={item?.id}>
            <div className="image-box">
              <img src={item?.image} alt={item?.title} />
            </div>
            <div className="text-box">
              <h4>{item?.title}</h4>
              <div className="location">
                <img
                  src={require("../../../assets/images/location.svg").default}
                  alt="Package"
                />
                <span>{item?.state}</span>
              </div>
              <div className="price">
                <span>₹ {item?.price_for_adult}</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default PreferredPackage;
