import React, { memo } from "react";
import { usePackage } from "../../../../Redux/Home/package";
import { Link, useLocation } from "react-router-dom";
import "./Preferences.css";
import "react-tabs/style/react-tabs.css";
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

function PreferredPackage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  console.log(category, "===");

  const { data: packages = [] } = usePackage({
    category: category || "Trekking",
  });
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
                      src={
                        require("../../../assets/images/location.svg").default
                      }
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
      </Slider>
    </>
  );
}

export default memo(PreferredPackage);
