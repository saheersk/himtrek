import React, { useState } from "react";
import "./Discover.css";
import { useDispatch } from "react-redux";
import { reviewFailure, reviewSuccess } from "../../../Redux/Discover/ReviewForm";
import axios from "axios";
import { BASE_URL } from "../../../axiosConfig";

function Review() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [visited, setVisited] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${BASE_URL}/review/application/`, {
        full_name: name,
        your_city: city,
        review_message: message,
        visited_place: visited,
        rating: rating,
      })
      .then((response) => {
        const data = response.data;
        if (response.data.status_code === 6000) {
          dispatch(reviewSuccess(data));
        } else {
          dispatch(reviewFailure(data));
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status_code === 6001) {
          dispatch(reviewFailure(error.response.data));
        }
      });

  }

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
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              <input
               value={name}
               onChange={(e) => setName(e.target.value)}
              type="text" placeholder="Full Name" />
              <input
               value={city}
               onChange={(e) => setCity(e.target.value)}
              type="text" placeholder="City" />
              <input
               value={visited}
               onChange={(e) => setVisited(e.target.value)}
              type="text" placeholder="Visited Place" />
              <textarea
               value={message}
               onChange={(e) => setMessage(e.target.value)}
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Your Review"
              ></textarea>
              <select
               value={rating}
               onChange={(e) => setRating(e.target.value)}
              name="rating" id="rating">
                <option value="Rating">Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
