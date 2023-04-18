import React from "react";
import "./Discover.css";

function Review() {
  return (
    <>
      <div className="review-container">
        <div className="container">
          <div className="img-box">
            <img
              src={require("../../assets/images/review-banner.jpg")}
              alt="Hero"
            />
          </div>
          <div className="form-box">
            <div className="head">
              <h2>Type Your Review</h2>
            </div>
            <form action="">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="City" />
              <input type="text" placeholder="Visited Place" />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Your Review"
              ></textarea>
              <select name="rating" id="rating">
                <option value="Rating">Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
