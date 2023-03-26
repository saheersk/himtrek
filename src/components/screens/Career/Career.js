import React from "react";
import "./Career.css";

function Career() {
  return (
    <>
      <section className="career-spoylight">
        <div className="wrapper">
          <div className="left">
            <h2>Build Your Career in HimTrek.</h2>
          </div>
          <div className="right">
            <div className="image-container">
              <img
                src={require("../../assets/images/career-spotlight.png")}
                alt="Spotlight"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="available-jobs">
        <div className="wrapper">
          <h3>Available Jobs</h3>
          <ul>
            <li>
              <div className="text-box">
                <h4>Designer</h4>
                <p>new opening for graphic designer</p>
              </div>
              <div className="button">
                <button>Apply Now</button>
              </div>
            </li>
            <li>
              <div className="text-box">
                <h4>Designer</h4>
                <p>new opening for graphic designer</p>
              </div>
              <div className="button">
                <button>Apply Now</button>
              </div>
            </li>
            <li>
              <div className="text-box">
                <h4>Designer</h4>
                <p>new opening for graphic designer</p>
              </div>
              <div className="button">
                <button>Apply Now</button>
              </div>
            </li>
            <li>
              <div className="text-box">
                <h4>Designer</h4>
                <p>new opening for graphic designer</p>
              </div>
              <div className="button">
                <button>Apply Now</button>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Career;
