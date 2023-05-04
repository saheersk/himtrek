import React, { memo } from "react";
import { Link } from "react-router-dom";
import { usePlace } from "../../../../Redux/Home/state";
import "./TopPackage.css";

function PackageCard() {
  const { data: states = [] } = usePlace();

  return (
    <>
      {states?.map((item, key) => {
        return (
          <li data-aos="fade-up" key={key}>
            <Link to={`/result/?state=${item?.state}`}>
              <div className="image-box">
                <img src={item?.image} alt={item?.state} />
              </div>
              <div className="shade">
                <span>{item?.state}</span>
              </div>
            </Link>
          </li>
        );
      })}
    </>
  );
}

export default memo(PackageCard);
