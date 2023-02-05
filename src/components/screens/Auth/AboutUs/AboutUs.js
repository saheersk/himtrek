import React from "react";
import "./AboutUs.css";
// import Header from "../../Header/Header";
// import Footer from "../../Footer/Footer";
function AboutUs() {
  return (
    <>
      {/* <Header /> */}
      <section id="about-content">
        <div className="wrapper">
          <div className="top-content">
            <h3>Make your trip Amazing!</h3>
            <p>
              As travel enthusiasts and as one of the most dedicated travel
              company of India, we, the Himtrek team work together to provide
              the finest trekking places from all over the Himalayas to
              everyone. We believe in empowering all travelers with ideal trail
              packages to make their experience cherish able for years to come.
              Adventure begins at the most mysterious and enchanting places is
              the mantra imbibed in our core values as we try our best to
              provide homely feels here in the mountains. You may not find
              luxurious hotel feels but we assure you of warmth, happiness and
              peaceful vibes with us. Come and feel a little more adventurous
              than usual on your vacation treks here with us at Himtrek.
            </p>
          </div>
          <div className="bottom-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              mattis condimentum enim ut viverra. Nulla dapibus vitae neque non
              facilisis. Donec auctor, velit ac varius tempor, felis justo
              ultrices sapien, ultrices placerat leo nulla in turpis. Donec
              gravida fringilla est quis iaculis. Donec nec interdum eros,
              maximus mattis velit. Nam finibus sapien eu felis porta, eu
              venenatis sapien consequat. Vestibulum bibendum felis et leo
              malesuada, sed pellentesque nisl aliquam
            </p>
            <h3>Our Journey</h3>
          </div>
        </div>
      </section>
      <section id="team">
        <div className="wrapper">
          <h6>Our Team</h6>
          <h3>Meet Our Team</h3>
          <div className="items">
            <div className="item">
              <div className="team-member">
                <img src={require("../../../assets/images/john.png")} alt="" />
              </div>
              <div className="text-box">
                <h5>Jully</h5>
                <p>Director</p>
                <img
                  src={require("../../../assets/images/facebook.png")}
                  alt=""
                />
                <img
                  src={require("../../../assets/images/instagram.png")}
                  alt=""
                />
              </div>
            </div>
            <div className="item">
              <div className="team-member">
                <img src={require("../../../assets/images/john.png")} alt="" />
              </div>
              <div className="text-box">
                <h5>John</h5>
                <p>Director</p>
                <img
                  src={require("../../../assets/images/facebook.png")}
                  alt=""
                />
                <img
                  src={require("../../../assets/images/instagram.png")}
                  alt=""
                />
              </div>
            </div>
            <div className="item">
              <div className="team-member">
                <img src={require("../../../assets/images/jomes.png")} alt="" />
              </div>
              <div className="text-box">
                <h5>Jomes</h5>
                <p>Director</p>
                <img
                  src={require("../../../assets/images/facebook.png")}
                  alt=""
                />
                <img
                  src={require("../../../assets/images/instagram.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default AboutUs;
