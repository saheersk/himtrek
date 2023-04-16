import React, { useEffect } from "react";
import "./Career.css";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCareerView } from "../../../Redux/Career/careerView";

function CareerSingle() {
  const dispatch = useDispatch();
  const careerView = useSelector((state) => state.careerView.careerView);
  const requirements = useSelector((state) => state.careerView.requirements);

  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    dispatch(fetchCareerView({ slug: slug }));
  }, [dispatch, slug]);

  return (
    <>
      <Header />
      <section id="career-single">
        <div className="wrapper">
          <div className="career-card">
            <div className="head-content">
              <div className="left">
                <h2>{careerView?.title}</h2>
                <h6>{careerView?.location_of_job}</h6>
              </div>
              <div className="right">
                <h3>{careerView?.experience} Year Experience</h3>
                <h5>Published Date: {careerView?.added_date}</h5>
              </div>
            </div>
            <ul>
              {requirements.map((item) => {
                return <li key={item?.id}>{item?.requirements}</li>;
              })}
            </ul>
            <p>{careerView?.description}</p>
            <button>Apply Now</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CareerSingle;
