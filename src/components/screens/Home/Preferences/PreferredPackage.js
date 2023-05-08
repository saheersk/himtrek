import React, { memo } from "react";
import { usePackage } from "../../../../Redux/Home/package";
import { Link, useLocation } from "react-router-dom";
import "./Preferences.css";
import "react-tabs/style/react-tabs.css";

function PreferredPackage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get('category');

  console.log(category, "===");

  const { data: packages = [] } = usePackage({category: category || "Trekking"});

  return (
    <>
      {packages?.map((item) => {
        return (
          <div className="card" key={item?.id}>
            <Link to={`/package/view/${item?.slug}`}>
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
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default memo(PreferredPackage);
