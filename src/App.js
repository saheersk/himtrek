import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/screens/Home/Spotlight/Home";
import { Helmet } from "react-helmet";
import Cart from "./components/screens/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/screens/Auth/Login/Login";
import SignUp from "./components/screens/Auth/SignUp/SignUp";
import Otp from "./components/screens/Auth/Otp/Otp";
import AboutUs from "./components/screens/Auth/AboutUs/AboutUs";
import PackageSingle from "./components/screens/Package/PackageSingle/PackageSingle";
import Privacy from "./components/screens/Agreement/Privacy";
import Cancellation from "./components/screens/Agreement/Cancellation";
import Contact from "./components/screens/Contact/Contact";

import { ColorRing } from "react-loader-spinner";
import Discover from "./components/screens/Discover/Discover";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HimTrek - Your Traveling Partner </title>
        <link
          rel="icon"
          href={require("./components/assets/images/himtrek-logo.svg").default}
        />
      </Helmet>
      <div className="App">
        {loading ? (
          <div className="loader-box">
            <ColorRing
              visible={true}
              height="100"
              width="100"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        ) : (
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/cart/" element={<Cart />} />
              <Route path="/package-single/" element={<PackageSingle />} />
              <Route path="/privacy/" element={<Privacy />} />
              <Route path="/cancellation/" element={<Cancellation />} />
              <Route path="/contact-us/" element={<Contact />} />
            </Routes>
          </Router>
        )}
      </div>
    </>
  );
}

export default App;
