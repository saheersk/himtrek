import React from "react";
import Header from "../../Header/Header";
import "./PackageSingle.css";
import Gear from "./Gear";
import Itinerary from "./Itinerary";
import QuickFacts from "./QuickFacts";
import Questions from "./Questions";
import Additions from "./Additions";

function PackageSingle() {
  return (
    <>
      <Header />
      <section id="banner">
        <div className="wrapper">
          <div className="cover-img">
            <div className="img-box">
              <img
                src={require("../../../assets/images/cover-img.png")}
                alt="Cover"
              />
            </div>
            <div className="text-box">
              <h3>Manali</h3>
              <p>Himachal Preadhesh</p>
            </div>
          </div>
          <div className="detials-box">
            <div className="item">
              <h6>
                <img
                  src={require("../../../assets/images/clock.svg").default}
                  alt="Location"
                />{" "}
                Duration
              </h6>
              <span>2 Night, 2 Day</span>
            </div>
            <div className="item">
              <h6>
                <img
                  src={require("../../../assets/images/calendar.svg").default}
                  alt="Location"
                />
                Date
              </h6>
              <span>12 April 2023 </span>
            </div>
            <div className="item price">
              <h6>₹ 10,000</h6>
              <span>book now</span>
            </div>
          </div>
          <div className="content-box">
            <div className="overview">
              <h3>Overview</h3>
              <p>
                Triund is a popular trekking destination located in the
                Dhauladhar range of the Himalayas in Himachal Pradesh. It is an
                easy trek that can be completed in 1 night and 2 days, making it
                a perfect weekend getaway for adventure enthusiasts. The trek
                starts from McLeod Ganj, a popular tourist destination and home
                to the Dalai Lama. The trail is well-marked and passes through
                lush green forests of oak, rhododendron, and deodar trees, with
                stunning views of the Kangra valley.
              </p>
              <p>
                The first half of the trek is relatively easy, with gradual
                inclines and a few steep stretches. The second half, however, is
                a bit challenging, with steeper inclines and rocky terrain. It
                takes about 4-5 hours to reach Triund from McLeodGanj, depending
                on your fitness level. Once you reach Triund, you are greeted
                with stunning panoramic views of the surrounding mountains,
                including the snow-capped Dhauladhar range. The campsite at
                Triund is a popular spot for overnight stays, and there are
                several tents and guesthouses available for rent. You can also
                set up your own tent and camp under the stars.
              </p>
              <p>
                Once you reach Triund, you are greeted with stunning panoramic
                views of the surrounding mountains, including the snow-capped
                Dhauladhar range. The campsite at Triund is a popular spot for
                overnight stays, and there are several tents and guesthouses
                available for rent. You can also set up your own tent and camp
                under the stars.
              </p>
            </div>
            <QuickFacts />
          </div>
          <Questions />
            <Additions/>
          <Itinerary />
          <Gear />
        </div>
        <div className="info-footer">
          <h5>Manali</h5>
          <button>Book Now</button>
        </div>
      </section>
    </>
  );
}

export default PackageSingle;
