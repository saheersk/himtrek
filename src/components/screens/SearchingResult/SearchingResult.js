import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PlaceCard from "./PlaceCard";

import "./SearchingResult.css";

function SearchingResult() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section id="searching-results">
        <Header />
        <div className="wrapper">
          <div className="top-box">
            <h4>Searching results</h4>
            <span className={`${isOpen ? "open" : ""}`} onClick={toggleMenu}>
              <img
                src={require("../../assets/images/filter.svg").default}
                alt="Images"
              />
            </span>
          </div>
          <div className="loc-filter">
            <ul>
              <li className="active">All Package</li>
              <li>State</li>
              <li>Cities</li>
            </ul>
          </div>
          <div className="place-cards">
            <PlaceCard />
          </div>

          {/* filter-bar */}
          <div className={`filter-container ${isOpen ? "open" : ""}`}>
            <div className="head">
              <span onClick={toggleMenu}>
                <img
                  src={require("../../assets/images/left-arrow.svg").default}
                  alt="Images"
                />
              </span>
              <h5>Filter</h5>
            </div>
            <div className="content-box">
              <form action="">
                <h4>Price Range</h4>
                <div className="item">
                  <input type="checkbox" name="one-price" />
                  <label htmlFor="one-price">Above 10,000</label>
                </div>
                <div className="item">
                  <input type="checkbox" name="two-price" />
                  <label htmlFor="two-price">below 10,000</label>
                </div>
                <div className="item">
                  <input type="checkbox" name="three-price" />
                  <label htmlFor="three-price">Above 4.5</label>
                </div>

                <h4>Rating</h4>
                <div className="item">
                  <input type="checkbox" name="one-rate" />
                  <label htmlFor="one-rate">Above 3.5</label>
                </div>
                <div className="item">
                  <input type="checkbox" name="two-rate" />
                  <label htmlFor="two-rate">below 3.0</label>
                </div>
              </form>
              <button>Show Results</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SearchingResult;
