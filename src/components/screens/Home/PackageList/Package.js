import React, { memo } from "react";
import { Link } from "react-router-dom";
import { usePackage } from "../../../../Redux/Home/package";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PackageList.css";

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

function Package() {
  const { data: packages = [] } = usePackage();
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
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
          );
        })}
      </Slider>
    </>
  );
}

export default memo(Package);
