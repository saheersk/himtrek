import React, { useEffect } from "react";
import Header from "../../Header/Header";
import Gear from "./Gear";
import Itinerary from "./Itinerary";
import QuickFacts from "./QuickFacts";
import Questions from "./Questions";
import Additions from "./Additions";
import { useDispatch, useSelector } from "react-redux";
import { fetchPackageView } from "../../../../Redux/Package/packageView";
import { useParams } from "react-router-dom";
import "./PackageSingle.css";

function PackageSingle() {
  const dispatch = useDispatch();
  const packageView = useSelector((state) => state.packageView.package);

  const params = useParams();
  
  useEffect(() => {
    dispatch(fetchPackageView(params.id));
  }, [params, dispatch]);
  
  return (
    <>
      <Header />
      <section id="banner">
        <div className="wrapper">
          <div className="cover-img">
            <div className="img-box">
              <img
                src={packageView?.image}
                alt={packageView?.title}
              />
            </div>
            <div className="text-box">
              <h3>{packageView?.title}</h3>
              <p>{packageView?.state}</p>
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
              <span>{packageView?.days} Days</span>
            </div>
            <div className="item">
              <h6>
                <img
                  src={require("../../../assets/images/calendar.svg").default}
                  alt="Location"
                />
                Date
              </h6>
              <span>Next Trip On {packageView?.next_trip_date}</span>
            </div>
            <div className="item price">
              <h6>₹ {packageView?.price}</h6>
              <span>book now</span>
            </div>
          </div>
          <div className="content-box">
            <div className="overview">
              <h3>Overview</h3>
              <p>
              {packageView?.description}
              </p>
              <p>

              </p>
              <p>
              </p>
            </div>
            <QuickFacts slug={params.id} />
          </div>
          <Questions slug={params.id} />
            <Additions slug={params.id}/>
          <Itinerary slug={params.id} />
          <Gear slug={params.id} />
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
