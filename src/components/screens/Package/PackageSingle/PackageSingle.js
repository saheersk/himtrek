import React from "react";
import Header from "../../Header/Header";
import "./PackageSingle.css";
import Gear from "./Gear";
import Itinerary from "./Itinerary";

function PackageSingle() {
  return (
    <>
      <section id="single-package-container">
        <div className="spotlight">
          <Header />
          <div className="cover-img-container">
            <img
              src={require("../../../assets/images/cover-img.png")}
              alt="Cover"
            />
          </div>
          <div className="title">
            <h4>Manali</h4>
            <div className="location">
              <div className="loc-img">
                <img
                  src={require("../../../assets/images/loc.svg").default}
                  alt="Location"
                />
              </div>
              <span>manali, Himachal Pradesh</span>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="wrapper">
            <div className="top">
              <div className="left">
                <div className="icon-img">
                  <img
                    src={require("../../../assets/images/clock.svg").default}
                    alt="Location"
                  />
                </div>
                <span>2Nights 3Days</span>
              </div>
              <div className="center">
                <div className="icon-img">
                  <img
                    src={require("../../../assets/images/calendar.svg").default}
                    alt="Location"
                  />
                </div>
                <span>08 Apr, 09 Apr, 15 Apr, and more</span>
              </div>
              <div className="right">
                <span>
                  <small>₹</small> 10,000
                </span>
                <button>book now</button>
              </div>
            </div>
            <div className="middle">
              <h6>Overview</h6>
              <p>
                Bhrigu Lake Trek Bhrigu Lake Trek is a trek to a sanctified lake
                located at a height of 4300 meters in the Kullu district of
                Himachal Pradesh. The lake is in a shape of an oval and lies
                near the Rohtang pass. The name of the lake is derived from the
                name of Sage Bhrigu. According to the village people, Sage
                Bhrigu spent his time meditating near the lake and that is how
                the lake got its name. The Bhrigu Lake trek begins from a point
                called Chaudda More, which is around 20 km from Manali. The trek
                moves by green forests, immense meadows, and hilly ridges where
                one finally gets the sight of Bhrigu lake. Bhrigu Lake Trek
                lasts for about three days starting from Manali. The Bhrigu lake
                lies at an enormous height of 14,100 feet. Bhrigu lake trek’s
                history is quite interesting. It is believed that son of Lord
                Brahma -Maharishi Bhrigu used to meditate near the lake thousand
                of years ago. Therefore, this pure and blessed lake is named
                after him. Bhrigu lake trek itinerary also includes going to
                Rola Kholi. From here, you’ll move on to Gulaba. This village
                has beautiful snow. The journey will take you through lush,
                green meadows and virgin forests. These lead you to the open
                camping site of Rola Kholi with pretty amazing views. Rola Kholi
                lies at the foundation of the trek and is considered as the
                Advance Base Camp of the trek. Night camping here provides an
                amazing experience. It is a perfect destination for shutterbugs
                as the entire sky lights up with millions of stars at night.
                Nature lovers will definitely enjoy love this peaceful view.
                Bhrigu lake has come a long way in tourism due to its
                mesmerizing views. While on your journey, you’ll get to watch
                Seven Sisters peaks and Hanuman Tibba. Along with this, you can
                also have a look of Deo Tibba. You will also be travelling all
                the way up to the lake.
              </p>
              <span className="head">INCLUSIONS/EXCLUSIONS</span>
              <h5>What we'll give. What we won't</h5>
              <div className="list">
                <ul className="ul-box">
                  <li>
                    <img
                      src={require("../../../assets/images/tick.svg").default}
                      alt="Tick"
                    />
                    <span>
                      Sleeping Tents are going to be arranged on Triple/Double
                      sharing basis.
                    </span>
                  </li>
                  <li>
                    <img
                      src={require("../../../assets/images/tick.svg").default}
                      alt="Tick"
                    />
                    <span>
                      Sleeping Tents are going to be arranged on Triple/Double
                      sharing basis.
                    </span>
                  </li>
                  <li>
                    <img
                      src={require("../../../assets/images/tick.svg").default}
                      alt="Tick"
                    />
                    <span>
                      Sleeping Tents are going to be arranged on Triple/Double
                      sharing basis.
                    </span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img
                      src={require("../../../assets/images/cross.svg").default}
                      alt="Cross"
                    />
                    <span>Transport to and from Manali.</span>
                  </li>
                  <li>
                    <img
                      src={require("../../../assets/images/cross.svg").default}
                      alt="Cross"
                    />
                    <span>Transport to and from Manali.</span>
                  </li>
                  <li>
                    <img
                      src={require("../../../assets/images/cross.svg").default}
                      alt="Cross"
                    />
                    <span>Transport to and from Manali.</span>
                  </li>
                </ul>
              </div>
            </div>
            <Itinerary />
          </div>
        </div>
        <Gear />
        <div className="direction-container">
          <div className="wrapper">
            <div className="direction">
              <div className="left">
                <h6>PICKUP POINT</h6>
                <h5>Directions.</h5>
                <div className="location">
                  <div className="loc-img">
                    <img
                      src={
                        require("../../../assets/images/loc-grey.svg").default
                      }
                      alt="Location"
                    />
                  </div>
                  <span>
                    Himtrek's Riverside Camps and Hostel, Manali, near Club
                    house, Manali, Himachal Pradesh, India
                  </span>
                </div>
                <div className="direct-button">
                  <button>
                    <div className="button">
                      view on map
                      <img
                        src={
                          require("../../../assets/images/arrow-black.svg")
                            .default
                        }
                        alt="Location"
                      />
                    </div>
                  </button>
                </div>
              </div>
              <div className="price">
                <span>
                  <small>₹</small> 10,000
                </span>
                <button>book now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PackageSingle;
