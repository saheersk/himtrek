import React from "react";
import Header from "../Header/Header";
import "./Cart.css";
import Product from "./Product"

function Cart() {
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
            <h6>Total</h6>
            <span><small>₹</small> 10000</span>
          </div>
          <div className="right">
            <button>checkout</button>
          </div>
        </div>
    </>
  );
}

export default Cart;
