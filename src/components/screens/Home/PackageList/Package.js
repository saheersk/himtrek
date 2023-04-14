import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPackage } from "../../../../Redux/Home/package";
import "./PackageList.css";

function Package() {
  const dispatch = useDispatch();
  const package_item = useSelector((package_item) => package_item.package.packages);

  useEffect(() => {
    dispatch(fetchPackage());
  }, [dispatch]);

  return (
    <>
    {package_item.map((item)=> {
      return (
        <div className="package" >
          <Link to={`/package/view/${item.slug}/`}>
          <div className="left-box">
            <div className="image-box">
              <img
                src={item?.image}
                alt={item?.title}
              />
            </div>
            <div className="text-box">
              <h3>{item?.title}</h3>
              <p>{item?.title}</p>
              <ul>
                <li className="wrapper-box">
                  <li className="time">
                    <img
                      src={require("../../../assets/images/clock.svg").default}
                      alt="Package"
                    />
                    <span>{item?.days} Days</span>
                  </li>
                  <li className="persons">
                    <img
                      src={require("../../../assets/images/user.svg").default}
                      alt="Package"
                    />
                    <span>{item?.person_slot} Slot</span>
                  </li>
                  <li className="location">
                    <span>{item?.state}</span>
                  </li>
                </li>
              </ul>
            </div>
          </div>
          <div className="price">
            <h4>₹ {item?.price}</h4>
            <img
              src={require("../../../assets/images/cart.svg").default}
              alt="Package"
            />
          </div>
          </Link>
      </div>
      )
    })}
      
    </>
  );
}

export default Package;
