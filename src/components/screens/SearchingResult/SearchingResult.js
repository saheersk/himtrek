import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PlaceCard from "./PlaceCard";

import "./SearchingResult.css";

function SearchingResult() {
  return (
    <>
      <section id="searching-results">
        <Header />
        <div className="wrapper">
          <div className="top-box">
            <h4>Searching results</h4>
            <span>
              <img
                src={require("../../assets/images/filter.svg").default}
                alt="Images"
              />
            </span>
          </div>
          <div className="place-cards">
            <PlaceCard />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SearchingResult;
