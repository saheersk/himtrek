import React from "react";
import Header from "../Header/Header";
import { Link, useParams } from "react-router-dom";
import { useCareerView } from "../../../Redux/Career/careerView";
import "./Career.css";

function CareerSingle() {  
  const params = useParams();
  const slug = params.slug;

  const { data: careerView = [] } = useCareerView({ slug: slug });
  const { data: { requirements } = [] } = useCareerView({ slug: slug });

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
              {requirements?.map((item) => {
                return <li key={item?.id}>{item?.requirements}</li>;
              })}
            </ul>
            <p>{careerView?.description}</p>
            <Link to={`/career-application/${careerView?.slug}`}>
            <button>Apply Now</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CareerSingle;
