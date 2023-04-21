import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <>
      <div className="not-found">
        <Header />
        <div className="wrapper">
          <div className="image-container">
            <img
              src={require("../../assets/images/not-fount.png")}
              alt="Images"
            />
          </div>
          <h3>Page not found!</h3>
          <Link to="/" className="button">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
