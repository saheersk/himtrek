import React from "react";
import Header from "../Header/Header";
import "./RoadSideAssistance.css";
import Footer from "../Footer/Footer";

function RoadSideAssistance() {
  return (
    <>
      <section id="assistance-container">
        <Header />
        <div className="wrapper">
          <div className="as-content">
            <div className="as-image-box">
              <img
                src={require("../../assets/images/assistance.svg").default}
                alt="Images"
              />
            </div>
            <div className="as-text-box">
              <h3>
                Make your turns by <span>assist</span> <br /> of Himtrek!
              </h3>
              <p>
                Capturing moments of your journey as much as the <br />
                destination through HimTrek.
              </p>
            </div>
          </div>
          <div className="contact-detials">
            <div className="text-data">
              <h4>Contact Detials</h4>
              <p>fill your detials for plan your trip.</p>
            </div>
            <div className="form-data">
              <form action="#">
                <div className="dual-data">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    className="name"
                  />
                  <input type="email" placeholder="e - mail" required />
                </div>
                <br />
                <input type="tel" placeholder="Mobile" required />
                <br />
                <div className="dual-data">
                  <input type="text" placeholder="From" required />
                  <input type="text" placeholder="To" required />
                </div>
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default RoadSideAssistance;
