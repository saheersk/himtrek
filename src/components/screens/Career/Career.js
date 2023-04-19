import React from "react";
import "./Career.css";
import { useCareer } from "../../../Redux/Career/career";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Career() {
  const { data: career = [] } = useCareer();

  return (
    <>
      <Header />
      <section className="career-spoylight">
        <div className="wrapper">
          <div className="left">
            <h2>Build Your Career in HimTrek.</h2>
          </div>
          <div className="right">
            <div className="image-container">
              <img
                src={require("../../assets/images/career-spotlight.png")}
                alt="Spotlight"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="available-jobs">
        <div className="wrapper">
          <h3>Available Jobs</h3>
          {career.length === 0 ? (
            <h4>No Job Found</h4>
          ) : (
            <ul>
              {career?.map((item) => {
                return (
                  <div key={item?.id}>
                    <Link to={`/career/view/${item?.slug}/`}>
                      <li>
                        <div className="text-box">
                          <h4>{item?.title}</h4>
                          <p>{item?.designation}</p>
                        </div>
                        <div className="button">
                          <button>Apply Now</button>
                        </div>
                      </li>
                    </Link>
                  </div>
                );
              })}
            </ul>
          )}
        </div>
      </section>
      <Footer/>

    </>
  );
}

export default Career;
