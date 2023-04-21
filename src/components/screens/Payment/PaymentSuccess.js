import React from "react";
import "./PaymentSuccess.css";

function PaymentSuccess() {
  return (
    <>
      <section id="payment">
        <div className="wrapper">
          <div className="paymentsuccess">
            <h2>Great Job!</h2>
            <div className="container-box">
              <div className="left">
                <h3>Payment Successful</h3>
                <h6>Our team will contact you shortly.</h6>
                <button>Back Home</button>
              </div>
              <div className="right">
                <div className="image-box">
                  <img
                    src={require("../../assets/images/payment-success.png")}
                    alt="Success"
                  />
                </div>
              </div>
            </div>
            <p>Ready for new trip, Have a nice day</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PaymentSuccess;
