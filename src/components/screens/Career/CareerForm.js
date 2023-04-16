import React from "react";
import "./Career.css";
import Header from "../Header/Header";

function CareerForm() {
  return (
    <>
      <Header />
      <section id="career-form">
        <div className="wrapper">
          <div className="form">
            <h2>Complete Your Application</h2>
            <form action="">
              <div className="item">
                <label htmlFor="">Full Name</label>
                <input type="text" />
              </div>
             <div className="item">
             <label htmlFor="">Email</label>
              <input type="text" />
             </div>
              <div className="item">
              <label htmlFor="">Phone Number</label>
              <input type="text" />
              </div>
              <div className="item">
              <label htmlFor="">Upload Resume</label>
              <input type="file" />
              </div>
              <div className="item-intro">
              <label htmlFor="">Introduction</label>
              <textarea name="" id="" cols="30" rows="8"></textarea>
              </div>
            </form>
            <button>Submit</button>
          </div>
            <div className="form">
                <h2>Complete Your Job Application</h2>
                <form action="">
                    <label htmlFor="">Career</label>
                    <input type="text" />
                    <label htmlFor="">Full Name</label>
                    <input type="text" />
                    <label htmlFor="">Email</label>
                    <input type="text" />
                    <label htmlFor="">Phone Number</label>
                    <input type="text" />
                    <label htmlFor="">Upload Resume</label>
                    <input type="file" />
                    <label htmlFor="">Introduction</label>
                    <input type="text" />
                </form>
                <button>Submit</button>
            </div>
        </div>
      </section>
    </>
  );
}

export default CareerForm;
