import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PlaceCard from "./PlaceCard";

import "./SearchingResult.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../../Redux/Home/category";
import { fetchState } from "../../../Redux/Home/state";

function SearchingResult() {
  const dispatch = useDispatch();
  const category = useSelector((category) => category.category.categories);
  const states = useSelector((state) => state.state.states);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchState());
  }, [dispatch]);

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

          <div className="place-cards">
            <PlaceCard />
            <PlaceCard />
          </div>

          {/* filter-bar */}
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
                    <input  type="checkbox" value="high-to-low" name="sort" />
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
                  {states.map((item) => {
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
