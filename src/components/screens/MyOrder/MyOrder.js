import React from "react";
import "./MyOrder.css";
import Header from "../Header/Header";
import OrderItem from "./OrderItem";
import { Link } from "react-router-dom";

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
            <div className="button">
              <Link to="/">Go Home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyOrder;
