import React, { createContext, useEffect, useState } from "react";
import Header from "../../Header/Header";
import Gear from "./Gear";
import Swal from "sweetalert2";

import Itinerary from "./Itinerary";
import QuickFacts from "./QuickFacts";
import Questions from "./Questions";
import Additions from "./Additions";
import { useDispatch, useSelector } from "react-redux";
import { usePackageView } from "../../../../Redux/Package/packageView";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./PackageSingle.css";
import { useAddToCart } from "../../../../Redux/Cart/cart";

import { format } from "date-fns";
import Calendar from "react-calendar";

export const SlugContext = createContext();

function PackageSingle() {
  const dispatch = useDispatch();
  // const message = useSelector((state) => state.packageView.message);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const userData = useSelector((state) => state.user.data);
  const isProduct = useSelector((cart) => cart.cart.isProducts);
  const product = useSelector((cart) => cart.cart.products);

  const token = userData?.data?.access;

  const { AddToCartHandler } = useAddToCart({ token });

  const navigate = useNavigate();

  const { slug } = useParams();
  const [param, setParam] = useState(slug);

  const [date, setDate] = useState(format(new Date(), "dd MMM Y"));
  const [endDate, setEndDate] = useState(format(new Date(), "dd MMM Y"));

  useEffect(() => {
    setParam(slug);
  }, [slug]);

  const handleCart = () => {
    if (isLoggedIn === false) {
      navigate("/login/");
    } else {
      if (isProduct) {
        Swal.fire({
          title: `${product?.package?.title} in Cart `,
          text: `${product?.package?.title} Moved to cart`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Go to Cart",
          cancelButtonText: "View",
        }).then((result) => {
          if (result.value) {
            navigate("/cart/");
          }
        });
      } else {
        AddToCartHandler({ slug: param, token: token, dispatch });
        Swal.fire({
          title: `${packageView?.title} Added to Cart`,
          text: "Successfully Added to Cart",
          icon: "success",
        });
      }
    }
  };

  function handleDateChange(value) {
    let select_date = format(value, "dd MMM Y");
    let dateObj = new Date(select_date);

    dateObj.setDate(dateObj.getDate() + packageView.days);
    let end_date = format(dateObj, "dd MMM Y");

    setDate(select_date);
    setEndDate(end_date);
  }
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { data: packageView = [] } = usePackageView({ slug: param });

  return (
    <>
      <Header />
      <section id="banner">
        <div className="wrapper">
          <div className="cover-img">
            <div className="img-box">
              <img src={packageView?.image} alt={packageView?.title} />
            </div>
            <div className="text-box">
              <h3>{packageView?.title}</h3>
              <p>{packageView?.state}</p>
            </div>
          </div>
          <div className="detials-box">
            <div className="item">
              <h6>
                <img
                  src={require("../../../assets/images/clock.svg").default}
                  alt="Location"
                />{" "}
                Duration
              </h6>
              <span>{packageView?.days} Days</span>
            </div>
            <div className="item">
              <h6>
                <img
                  src={require("../../../assets/images/calendar.svg").default}
                  alt="Location"
                />
                Date
              </h6>
              <span>Next Trip On {packageView?.next_trip_date}</span>
            </div>
            <div className="item price">
              <h6>₹ {packageView?.price_for_adult}</h6>
              <span onClick={toggleMenu}>book now</span>
            </div>
          </div>
          <SlugContext.Provider value={param}>
            <div className="content-box">
              <div className="overview">
                <h3>Overview</h3>
                <p>{packageView?.description}</p>
                <p></p>
                <p></p>
              </div>
              <QuickFacts />
            </div>
            <Questions />
            <Additions />
            <Itinerary />
            <Gear />
          </SlugContext.Provider>
        </div>
        <div className="info-footer">
          <h5>{packageView?.title}</h5>
          <button onClick={() => handleCart(packageView?.slug)}>
            Book Now
          </button>
        </div>
        <div className={`date-popup ${isOpen ? "active" : ""} `}>
          <Calendar
            value={date}
            onChange={handleDateChange}
            minDate={new Date()}
          />
          <div className="date-box">
            <div className="date-content">
              <h4>Select your date.</h4>
              <span>
                Trip Start date : <small className="start"> {date}</small>
              </span>
              <span>
                Trip End Date : <small className="end"> {endDate}</small>
              </span>
            </div>
            <small
              onClick={() => handleCart(packageView?.slug)}
              className="button"
            >
              Book Now
            </small>

            <h5 className="close" onClick={toggleMenu}>
              X
            </h5>
          </div>
        </div>
        <div
          className={`date-overlay ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        ></div>
      </section>
    </>
  );
}

export default PackageSingle;
