import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPackage } from "../../../../Redux/Home/package";
import { Link, useLocation } from "react-router-dom";
import "./Preferences.css";
import "react-tabs/style/react-tabs.css";

function PreferredPackage() {
  const dispatch = useDispatch();
  const package_item = useSelector(
    (package_item) => package_item.package.packages
  );

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get('category');

  useEffect(() => {
    dispatch(fetchPackage({category: category }));
  }, [dispatch, category]);

  return (
    <>
      {package_item.map((item) => {
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

export default PreferredPackage;
