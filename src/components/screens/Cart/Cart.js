import React from "react";
import Header from "../Header/Header";
import "./Cart.css";
import Product from "./Product"
import { useSelector } from "react-redux";

function Cart() {
  const package_price_per_person = useSelector((cart) => cart.cart.package_price_per_person);

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
      </section>
        <div className="checkout-banner">
          <div className="left">
            <h6>Package Price Per Person</h6>
            <span><small>₹</small> {package_price_per_person}</span>
          </div>
          <div className="right">
            <button>Checkout</button>
          </div>
        </div>
    </>
  );
}

export default Cart;
