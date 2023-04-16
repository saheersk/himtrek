import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SearchingResult.css";
import { fetchPackage } from "../../../Redux/Home/package";
import { Link, useLocation } from "react-router-dom";

function PlaceCard() {
  const dispatch = useDispatch();
  const package_item = useSelector((package_item) => package_item.package.packages);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const state = params.get('state');
  const month = params.get('month');
  const city = params.get('city');
  const category = params.get('category');
  const sort = params.get('sort');

  useEffect(() => {
    dispatch(fetchPackage({month: month, state: state, city: city, category: category, sort: sort}));

  }, [dispatch, month, state, city, category, sort]);

  return (
    <>
    {package_item.map((item) => {
      return (
        <div className="place-card" key={item?.id}>
        <Link to={`/package/view/${item?.slug}`}>
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

            <small className="button">View</small>
          </div>
        </div>
      </Link>
      </div>
      )
    })}
      
    </>
  );
}

export default PlaceCard;
