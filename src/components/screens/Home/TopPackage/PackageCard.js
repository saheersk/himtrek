import React, { memo } from "react";
import { Link } from "react-router-dom";
import { usePlace } from "../../../../Redux/Home/state";
import "./TopPackage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#fff" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#fff" }}
      onClick={onClick}
    />
  );
}

function PackageCard() {
  const { data: states = [] } = usePlace();
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {states?.map((item, key) => {
          return (
            <div className="top-package-card" key={key}>
              <Link to={`/result/?state=${item?.state}`}>
                <div className="image-box">
                  <img src={item?.image} alt={item?.state} />
                </div>
                <div className="shade">
                  <span>{item?.state}</span>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default memo(PackageCard);
