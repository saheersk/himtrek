import React, { useState } from "react";
import Header from "../Header/Header";
import "./Cart.css";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartGear from "./CartGear";
import Swal from "sweetalert2";
import { useCartProduct } from "../../../Redux/Cart/cart";

function Cart() {
  const dispatch = useDispatch();
  const gearCart = useSelector((state) => state.gearCart.gearCart);
  const userData = useSelector((state) => state.user.data);

  const token = userData?.data?.access;

  const package_price_per_person = useSelector(
    (cart) => cart.cart.package_price_per_person
  );
  const package_price_per_children = useSelector(
    (cart) => cart.cart.package_price_per_children
  );
  const package_price_family_of_four = useSelector(
    (cart) => cart.cart.package_price_family_of_four
  );

  const total_gear_price = gearCart.reduce((acc, item) => {
    const price = item?.gears?.price_per_day * parseInt(item?.days);
    return acc + price;
  }, 0);

  const [allPrice, setAllPrice] = useState(false);

  const navigate = useNavigate();

  const { data: product = [] } = useCartProduct({ token: token , dispatch: dispatch });

  const toggleMenu = () => {
    setAllPrice(!allPrice);
  };

  const handleClick = (slug) => {
    if (slug) {
      navigate(`/travel-info/${slug}/`);
    } else {
      Swal.fire({
        title: `Cart is empty`,
        text: "Add Package to Cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Packages",
        cancelButtonText: "CANCEL",
      }).then((result) => {
        if (result.value) {
          navigate("/result/");
        }
      });
    }
  };

  return (
    <>
      <Header />
      <section className="cart-container">
        <div className="heading">
          <h4>Cart</h4>
        </div>
        <div className="cart-box">
          <Product />
        </div>
        <CartGear />
      </section>
      <div className="checkout-banner">
        <div className="left" onClick={toggleMenu}>
          <div className="amount">
            <h3>
              Package for 1 Person Price{" "}
              <span> ₹ {package_price_per_person}</span>
            </h3>
            <h3>
              Total price for Gear <span> ₹ {total_gear_price}</span>
            </h3>
          </div>
          <div className="small-img">
            <img
              src={require("../../assets/images/angle-up-solid.png")}
              alt="Images"
            />
          </div>
          {allPrice ? (
            <>
              <div className="price-list">
                <div className="item">
                  <h6>Package Price Per Person </h6>
                  <span>
                    <small>₹</small> {package_price_per_person}
                  </span>
                </div>
                <div className="item">
                  <h6>Package Price Per Children Below 6 years</h6>
                  <span>
                    <small>₹</small> {package_price_per_children}
                  </span>
                </div>
                <div className="item">
                  <h6>Package Price for family of 4</h6>
                  <span>
                    <small>₹</small> {package_price_family_of_four}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="right">
          <button onClick={() => handleClick(product?.package?.slug)}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
