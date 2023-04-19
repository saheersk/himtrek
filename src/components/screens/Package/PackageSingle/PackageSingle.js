import React from "react";
import Header from "../../Header/Header";
import Gear from "./Gear";
import Swal from "sweetalert2";

import Itinerary from "./Itinerary";
import QuickFacts from "./QuickFacts";
import Questions from "./Questions";
import Additions from "./Additions";
import { useDispatch, useSelector } from "react-redux";
import {
  usePackageView,
} from "../../../../Redux/Package/packageView";
import { useNavigate, useParams } from "react-router-dom";
import "./PackageSingle.css";
import { useAddToCart } from "../../../../Redux/Cart/cart";

function PackageSingle() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.packageView.message);
  const userData = useSelector((state) => state.user.data);
  const isProduct = useSelector((cart) => cart.cart.isProducts);
  const product = useSelector((cart) => cart.cart.products);
  
  const token = userData?.data?.access;

  const { AddToCartHandler } = useAddToCart({ token })

  const navigate = useNavigate();

  const params = useParams();
  const slug = params.slug;

  const handleCart = (id) => {
    if (message === 401) {
      navigate("/login/");
    }
    else {
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
              navigate("/cart/")
          }
        });
      }
      else {
        AddToCartHandler({ slug: slug, token: token, dispatch})
        Swal.fire({
          title: `${packageView?.title} Added to Cart`,
          text: "Successfully Added to Cart",
          icon: "success",
        })
      }
    }
  
  

  };

  const { data: packageView = [] } = usePackageView({ slug : slug });

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
              <span onClick={()=> handleCart(packageView?.slug)}>book now</span>
            </div>
          </div>
          <div className="content-box">
            <div className="overview">
              <h3>Overview</h3>
              <p>{packageView?.description}</p>
              <p></p>
              <p></p>
            </div>
            <QuickFacts slug={slug} />
          </div>
          <Questions slug={slug} />
          <Additions slug={slug} />
          <Itinerary slug={slug} />
          <Gear slug={slug} />
        </div>
        <div className="info-footer">
          <h5>{packageView?.title}</h5>
          <button onClick={()=> handleCart(packageView?.slug)}>Book Now</button>

        </div>
      </section>
    </>
  );
}

export default PackageSingle;
