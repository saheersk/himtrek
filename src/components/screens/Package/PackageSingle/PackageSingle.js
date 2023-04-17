import React, { useEffect } from "react";
import Header from "../../Header/Header";
import Gear from "./Gear";
import Swal from "sweetalert2";

import Itinerary from "./Itinerary";
import QuickFacts from "./QuickFacts";
import Questions from "./Questions";
import Additions from "./Additions";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  fetchPackageView,
} from "../../../../Redux/Package/packageView";
import { useNavigate, useParams } from "react-router-dom";
import "./PackageSingle.css";
import { fetchCartProduct } from "../../../../Redux/Cart/cart";

function PackageSingle() {
  const dispatch = useDispatch();
  const packageView = useSelector((state) => state.packageView.package);
  const message = useSelector((state) => state.packageView.message);
  const gearMessage = useSelector((state) => state.gearCart.message);
  const userData = useSelector((state) => state.user.data);
  const product = useSelector((cart) => cart.cart.products); 

  // const [isCart, SetIsCart] = useState(false)

  const token = userData?.data?.access;

  console.log(message, "===message");
  console.log(gearMessage, "===gearMessage");

  const navigate = useNavigate();

  const params = useParams();
  const slug = params.slug;


  const handleCart = (id) => {
    if (message === 401) {
      navigate("/login/");
    }
    else {
      if (product?.package?.slug === id) {
        Swal.fire({
          title: `Already in Cart${packageView?.title}`,
          text: `${packageView?.title} Moved to cart`,
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
        dispatch(addToCart({slug: slug, token: token}))
        Swal.fire({
          title: `${packageView?.title} Added to Cart`,
          text: "Successfully Added to Cart",
          icon: "success",
        })
        dispatch(fetchCartProduct(token));
      }
    }
  
  

  };


  useEffect(() => {
    dispatch(fetchPackageView(slug));
  }, [slug, dispatch]);

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
