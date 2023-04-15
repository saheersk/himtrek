import React from "react";
import "./Cart.css";

function CartGear() {
  return (
    <>
      <div className="slide-cart">
        <div className="wrapper">
          <h5>Gears</h5>
          <div className="slide">
            <div className="item">
              <div className="left">
                <div className="product-img">
                  <img
                    src={require("../../assets/images/workspace1.jpg")}
                    alt="Location"
                  />
                </div>
              </div>
              <h5>Gopro</h5>
              <div className="center">
                <div className="day-box">
                  <div className="image-box">
                    <img
                      src={
                        require("../../assets/images/plus-solid.svg").default
                      }
                      alt="Location"
                    />
                  </div>
                  <span>1 Day</span>
                  <div className="image-box">
                    <img
                      src={
                        require("../../assets/images/minus-solid.svg").default
                      }
                      alt="Location"
                    />
                  </div>
                </div>
                <h6>₹ 100 / Day</h6>
              </div>

              <button>Remove</button>
            </div>
            <div className="item">
              <div className="left">
                <div className="product-img">
                  <img
                    src={require("../../assets/images/gopro.png")}
                    alt="Location"
                  />
                </div>
              </div>
              <h5>Gopro</h5>
              <div className="center">
                <div className="day-box">
                  <div className="image-box">
                    <img
                      src={
                        require("../../assets/images/plus-solid.svg").default
                      }
                      alt="Location"
                    />
                  </div>
                  <span>1 Day</span>
                  <div className="image-box">
                    <img
                      src={
                        require("../../assets/images/minus-solid.svg").default
                      }
                      alt="Location"
                    />
                  </div>
                </div>
                <h6>₹ 100 / Day</h6>
              </div>

              <button>Remove</button>
            </div>
            <div className="item">
              <div className="left">
                <div className="product-img">
                  <img
                    src={require("../../assets/images/gopro.png")}
                    alt="Location"
                  />
                </div>
              </div>
              <h5>Gopro</h5>
              <div className="center">
                <div className="day-box">
                  <div className="image-box">
                    <img
                      src={
                        require("../../assets/images/plus-solid.svg").default
                      }
                      alt="Location"
                    />
                  </div>
                  <span>1 Day</span>
                  <div className="image-box">
                    <img
                      src={
                        require("../../assets/images/minus-solid.svg").default
                      }
                      alt="Location"
                    />
                  </div>
                </div>
                <h6>₹ 100 / Day</h6>
              </div>

              <button>Remove</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartGear;
