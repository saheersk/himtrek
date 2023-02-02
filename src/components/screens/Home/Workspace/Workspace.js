import React from "react";
import "./Workspace.css";

function Workspace() {
  return (
    <>
      <section id="workspace">
        <div className="wrapper">
          <div className="top-container">
            <h4>plan your workspace with himtrek</h4>
            <p data-aos="fade-up">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              officia soluta amet quis earum molestiae cumque facilis dolore
              inventore veniam impedit totam assumenda recusandae explicabo
              omnis sed cum, fugit ab.
            </p>
          </div>
          <div className="features">
            <ul>
              <li>
                {" "}
                <img
                  src={require("../../../assets/images/circle.svg").default}
                  alt="Circle"
                />
                <span>HimTrek provide feel good workspaces</span>
              </li>
              <li>
                {" "}
                <img
                  src={require("../../../assets/images/circle.svg").default}
                  alt="Circle"
                />
                <span>HimTrek provide feel good workspaces</span>
              </li>
              <li>
                {" "}
                <img
                  src={require("../../../assets/images/circle.svg").default}
                  alt="Circle"
                />
                <span>HimTrek provide feel good workspaces</span>
              </li>
            </ul>
            <div className="image-container">
              <div className="image-box">
                <img
                  src={require("../../../assets/images/workspace1.jpg")}
                  alt="Cover"
                />
              </div>
              <div className="image-box">
                <img
                  src={require("../../../assets/images/workspace2.png")}
                  alt="Cover"
                />
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="banner-image" data-aos="fade-up">
              <img
                src={require("../../../assets/images/banner.png")}
                alt="Banner"
              />
            </div>
            <div className="text-box">
              <h4>work with free mind!</h4>
              <p>
                The HimTrek give a space for remote workers with our package and
                spacial space.
              </p>
              <div className="button">view package</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Workspace;
