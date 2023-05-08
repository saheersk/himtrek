import React, { memo } from "react";
import { Link } from "react-router-dom";
import { usePackage } from "../../../../Redux/Home/package";
import Carousel from 'react-elastic-carousel';
import "./PackageList.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Package() {
  const { data: packages = [] } = usePackage();

  return (
    <>
      {packages?.map((item) => {
        return (
          // <Carousel breakPoints={breakPoints}>
          <div className="package" key={item?.id}>
            <Link to={`/package/view/${item.slug}/`}>
              <div className="left-box">
                <div className="image-box">
                  <img src={item?.image} alt={item?.title} />
                </div>
                <div className="text-box">
                  <div className="content">
                    <h3>{item?.title}</h3>
                    <p>{item?.title}</p>
                  </div>
                </div>
              </div>
              <div className="price">
                <h4>₹ {item?.price_for_adult}</h4>
                <img
                  src={require("../../../assets/images/cart.svg").default}
                  alt="Package"
                />
              </div>
            </Link>
          </div>
          // </Carousel>
        );
      })}
    </>
  );
}

export default memo(Package);
