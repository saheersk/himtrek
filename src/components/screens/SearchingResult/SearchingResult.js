import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PlaceCard from "./PlaceCard";
import { useCategory } from "../../../Redux/Home/category";
import { usePlace } from "../../../Redux/Home/state";
import "./SearchingResult.css";

function SearchingResult() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { data: category } = useCategory();
  const { data: places } = usePlace();

  return (
    <>
      <section id="searching-results">
        <Header />
        <div className="wrapper">
          <div className="top-box">
            <h4>Packages</h4>
            <span className={`${isOpen ? "open" : ""}`} onClick={toggleMenu}>
              <img
                src={require("../../assets/images/filter.svg").default}
                alt="Images"
              />
            </span>
          </div>

          <div className="place-cards">
            <PlaceCard />
          </div>
          {isOpen && (
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
                    <input type="checkbox" value="high-to-low" name="sort" />
                    <label htmlFor="high-to-low">High to Low Price</label>
                  </div>
                  <div className="item">
                    <input type="checkbox" value="low-to-high" name="sort" />
                    <label htmlFor="low-to-high">Low to High Price</label>
                  </div>
                  <h4>Category</h4>
                  {category.map((item) => {
                    return (
                      <div className="item" key={item?.id}>
                        <input
                          type="checkbox"
                          value={item?.title}
                          name="category"
                        />
                        <label htmlFor={item?.title}>{item?.title}</label>
                      </div>
                    );
                  })}

                  <h4>State</h4>
                  {places.map((item) => {
                    return (
                      <div className="item" key={item?.id}>
                        <input
                          type="checkbox"
                          value={item?.state}
                          name="state"
                        />
                        <label htmlFor={item?.state}>{item?.state}</label>
                      </div>
                    );
                  })}
                  <button>Show Results</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SearchingResult;
