import React from 'react'
import "./Cart.css";

function product() {
  return (
    <>
    <div className="item-container">
           <div className="left">
           <div className="item-img">
              <img
                src={require("../../assets/images/cart-img.png")}
                alt="cart"
              />
            </div>
            <div className="item-name">
              <h6>Tajmahal, and Delhi</h6>
              <p>Date : 12 Jan 2023 to 25 - Jan 2023</p>
            </div>
           </div>
          <div className="price-details">
          <div className="item-qty">
              <div className="person-count">
                <div className="person">
                  <img
                    src={require("../../assets/images/person.svg").default}
                    alt="person"
                  />
                </div>
                <small>Persons</small>
              </div>
              <div className="qty-count">
                <div className="qty-button">
                  <img
                    src={require("../../assets/images/minus-solid.svg").default}
                    alt="Minus"
                  />
                </div>
                <span className="count">3</span>
                <div className="qty-button">
                  <img
                    src={require("../../assets/images/plus-solid.svg").default}
                    alt="Minus"
                  />
                </div>
              </div>
            </div>
            <div className="amount">
              <span className="amount-inr"><small>₹</small> 10000</span>
            </div>
            <div className="delete">
                <img src={require("../../assets/images/delete.png")} alt="Delete" />
            </div>
          </div>
          </div>
          <hr />
    </>
  )
}

export default product