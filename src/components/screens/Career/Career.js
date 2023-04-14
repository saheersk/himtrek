import React, { useEffect } from "react";
import "./Career.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCareer } from "../../../Redux/Career/career";

function Career() {
  const dispatch = useDispatch();
  const career = useSelector((state) => state.career.career);

  useEffect(() => {
    dispatch(fetchCareer());
  }, [dispatch]);

  return (
    <>
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
          <ul>
            {career.map((item) => {
              return (
                <li key={item?.id}>
              <div className="text-box">
                <h4>{item?.title}</h4>
                <p>{item?.designation}</p>
              </div>
              <div className="button">
                <button>Apply Now</button>
              </div>
            </li>
              )
            })}
            
          </ul>
        </div>
      </section>
    </>
  );
}

export default Career;
