import React from "react";
import "./MyOrder.css";
import Header from "../Header/Header";
import OrderItem from "./OrderItem";
import { Link } from "react-router-dom";
import OrderGear from "./OrderGear";

function MyOrder() {
  return (
    <>
      <Header />
      <section id="order-container">
        <div className="wrapper">
          <div className="head">
            <h3>My Orders</h3>
          </div>
          <div className="order-content">
            <OrderItem />
            <OrderItem />
            <div className="head">
              <h3>My Gears</h3>
            </div>
            <OrderGear />
            <OrderGear />
          </div>

          <div className="button">
            <Link to="/">Go Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyOrder;
