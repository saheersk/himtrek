import React from "react";
import Header from "../Header/Header";
import Carousel from "react-elastic-carousel";

import "./Discover.css";
import Footer from "../Footer/Footer";
import ClientCard from "./ClientCard";
import CityCards from "./CityCards";
import Review from "./Review";

function Discover() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <>
      <Header />
      <section id="discover">
        <div className="wrapper">
          <div className="head">
            <h3>find & book your ideal trip</h3>
          </div>
          <div className="content-box">
            <div className="main-city">
              <CityCards />
            </div>
          </div>
        </div>
      </section>
      <section id="client-box">
        <div className="wrapper">
          <div className="head">
            <h4>
              our happy <span>travelers</span>
            </h4>
          </div>
          <ul className="client-slider">
            <Carousel
              itemsToShow={3}
              enableSwipe={true}
              enableAutoPlay={true}
              breakPoints={breakPoints}
            >
              <ClientCard />
            </Carousel>
          </ul>
          <Review />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Discover;
