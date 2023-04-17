import React, { useState } from "react";
import Header from "../Header/Header";
import "./Cart.css";
import Product from "./Product";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartGear from "./CartGear";

function Cart() {
  const product = useSelector((cart) => cart.cart.products);
  const gearCart = useSelector((state) => state.gearCart.gearCart);

  console.log(gearCart, '==gear');

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

  console.log(total_gear_price, 'gaer price');

  const [allPrice, setAllPrice] = useState(false);
  const toggleMenu = () => {
    setAllPrice(!allPrice);
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
        <div className="left">
          <h3 onClick={toggleMenu}>
            Package for 1 Person Price <span> ₹ {package_price_per_person}</span>
            Total price for Gear <span> ₹ {total_gear_price}</span>
            <img
              src={require("../../assets/images/angle-up-solid.png")}
              alt="Images"
              />
          </h3>
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
          <Link to={`/traveler-info/${product?.package?.slug}/`}>
            <button>Checkout</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cart;
