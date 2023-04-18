import React from "react";
import "./MyOrder.css";

function OrderItem() {
  return (
    <>
      <div className="order-card">
        <div className="left-content">
          <div className="img-box">
            {/* <img src={require("../../assets/images/mumbai.png")} alt="Hero" /> */}
          </div>
          <div className="text-box">
            <h4>Mumbai</h4>
            <span>Maharashtra</span>
          </div>
        </div>
        <div className="date-container">
          <div className="date-box">
            <h5>Trip Date</h5>
            <small>April 15 </small>
          </div>
          <div className="date-box order">
            <h5>Order Date</h5>
            <small className="gray">April 1</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderItem;
