import React from "react";
import "./Career.css";
import Header from "../Header/Header";

function CareerSingle() {
  return (
    <>
      <Header />
      <section id="career-single">
        <div className="wrapper">
          <div className="career-card">
            <div className="head-content">
              <div className="left">
                <h2>Graphic Designer</h2>
                <h6>Kochi Kerala</h6>
              </div>
              <div className="right">
                <h3>2 Year Experience</h3>
                <h5>Deceember 20, 2023</h5>
              </div>
            </div>
            <ul>
              <li>
                Basics Knowledge of Photoshop, Adobe Illustration and Premire
                Pro
              </li>
              <li>Communication Skill</li>
              <li>Best Creative Knowledge</li>
              <li>Own Laptop</li>
            </ul>
            <p>
              HimTrek is hiring Graphics Designer, Sed sit amet orci nec erat
              hendrerit congue. Ut laoreet id lacus ac euismod. Integer viverra
              commodo diam. Cras mattis erat vitae neque molestie facilisis.
              Nunc lacus mauris, aliquam nec suscipit a, congue sit amet lorem.
              Praesent mattis, sem dignissim fermentum elementum, massa enim
              vulputate enim, nec faucibus leo arcu in velit. Vivamus id leo vel
              sem lobortis finibus. Vestibulum efficitur felis et enim tincidunt
              eleifend. Aenean fermentum dapibus libero at tincidunt. Nullam a
              malesuada nibh, vel rutrum nibh. Nulla est nibh, laoreet ac
              volutpat non, semper eget magna. Aenean tempus lectus eget magna
              vestibulum commodo eu quis orci. Ut a commodo nisi.
            </p>
            <button>Apply Now</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CareerSingle;
