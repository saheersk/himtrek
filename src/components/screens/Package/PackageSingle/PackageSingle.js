import React from "react";
import Header from "../../Header/Header";
import "./PackageSingle.css";
import Gear from "./Gear";
import Itinerary from "./Itinerary";

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
                {" "}
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
            <div className="quick-facts">
              <h3>Quick Fact</h3>
              <table>
                <tr>
                  <td className="bold">Region:</td>
                  <td>Mcleodganj, Himachal Pradesh</td>
                </tr>
                <tr>
                  <td className="bold">Start/End Point of Trek:</td>
                  <td>Dharamkot</td>
                </tr>
                <tr>
                  <td className="bold">Duration:</td>
                  <td>1N/2D</td>
                </tr>
                <tr>
                  <td className="bold">Trek Distance</td>
                  <td>9 Km</td>
                </tr>
                <tr>
                  <td className="bold">Trek Height: </td>
                  <td>9350 Ft</td>
                </tr>
                <tr>
                  <td className="bold">Trek Temperature: </td>
                  <td>Day (20°C to 25°C) and Night (5°C to 10°C)</td>
                </tr>
                <tr>
                  <td className="bold">Best Time to Trek Triund: </td>
                  <td>March-June & August-December</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="questions">
            <div className="item">
              <h3>Best Time to Visit?</h3>
              <p>
                The best time to visit Triund trek is from March to June and
                August to December. During these months, the weather is
                pleasant, and the skies are clear, making it an ideal time for
                trekking and enjoying the breathtaking views of the Dhauladhar
                range. It's recommended to avoid the monsoon season from July to
                August as the trail can become slippery and dangerous due to
                heavy rainfall.
              </p>
            </div>
            <div className="item">
              <h3>How Difficult is the Triund Trek?</h3>
              <p>
                The Triund trek is considered to be an easy trek. The total
                distance of the trek is around 9 kilometres (5.6 miles), and it
                takes around 4-6 hours to complete the trek depending on your
                fitness level and the weather conditions. The trail is
                well-marked and passes through lush green forests of oak,
                rhododendron, and deodar trees, with stunning views of the
                Kangra valley. However, the last stretch of the trek can be a
                bit steep and strenuous. With a basic level of fitness, the trek
                can be completed easily.
              </p>
            </div>
            <div className="item">
              <h3>Renting Equipment for the Trek?</h3>
              <p>
                Himtrek does provide easy accessibility to almost all types of
                equipment required for the trek on a rental basis with
                reasonable prices and extremely good quality. The equipment can
                be arranged on prior notice.
              </p>
            </div>
            <div className="item">
              <h3>How is the Weather during the Triund Trek?</h3>
              <p>
                Triund trek's weather varies depending on the time of the year
                and the day. During summer (April-June), temperatures range from
                20°C to 25°C (68°F to 77°F) during the day, dropping to 5°C to
                10°C (41°F to 50°F) at night. Monsoon season (July-Sept) sees
                heavy rainfall, making the trail slippery and dangerous. The
                best time to visit is from March to June and September to
                November when the weather is pleasant, and the skies are clear.
              </p>
            </div>
            <div className="item">
              <h3>How to Reach Triund Basecamp - Dharamkot?</h3>
              <ul>
                <li>
                  <span> By Air:</span> The nearest airport is Gaggal Airport in
                  Dharamshala, which is around 18 kilometres (11 miles) away.{" "}
                </li>
                <li>
                  <span>By Train:</span> The nearest railway station is
                  Pathankot Railway Station, which is around 90 kilometres (56
                  miles) away. From Dharamshala or McLeodGanj, you can take a
                  taxi or local bus to reach Dharamkot.{" "}
                </li>
                <li>
                  <span> By Bus:</span> You can also take a direct bus from
                  Delhi or Chandigarh to Dharamshala or McLeodGanj, and then
                  hire a taxi or take a local bus to reach Dharamkot.
                </li>
              </ul>
            </div>
          </div>

          <div className="additions">
            <h5>INCLUSIONS/EXCLUSIONS</h5>
            <h2>What we'll give. What we won't</h2>
            <div className="container-item">
              <div className="item ">
                <h6>What is included in the tour</h6>
                <ul>
                  <li>
                    <img
                      src={require("../../../assets/images/tick.svg").default}
                      alt="Tick"
                    />
                    Accommodation on sharing basis.
                  </li>
                  <li>
                    <img
                      src={require("../../../assets/images/tick.svg").default}
                      alt="Tick"
                    />
                    Accommodation on sharing basis.
                  </li>
                  <li>
                    <img
                      src={require("../../../assets/images/tick.svg").default}
                      alt="Tick"
                    />
                    Accommodation on sharing basis.
                  </li>
                </ul>
              </div>
              <div className="item ">
                <h6>What is included in the tour</h6>
                <ul>
                  <li>
                    <img
                      src={require("../../../assets/images/cross.svg").default}
                      alt="Cross"
                    />
                    Accommodation on sharing basis.
                  </li>
                  <li>
                    <img
                      src={require("../../../assets/images/cross.svg").default}
                      alt="Cross"
                    />
                    Accommodation on sharing basis.
                  </li>
                  <li>
                    <img
                      src={require("../../../assets/images/cross.svg").default}
                      alt="Cross"
                    />
                    Accommodation on sharing basis.
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
