import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/screens/Home/Spotlight/Home";
import { Helmet } from "react-helmet";
import Cart from "./components/screens/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/screens/Auth/Login/Login";
import SignUp from "./components/screens/Auth/SignUp/SignUp";
import AboutUs from "./components/screens/Auth/AboutUs/AboutUs";
import PackageSingle from "./components/screens/Package/PackageSingle/PackageSingle";
import Privacy from "./components/screens/Agreement/Privacy";
import Cancellation from "./components/screens/Agreement/Cancellation";
import Contact from "./components/screens/Contact/Contact";

import { ColorRing } from "react-loader-spinner";
import Discover from "./components/screens/Discover/Discover";
import NotFoundPage from "./components/screens/NotFoundPage/NotFoundPage";
import SearchingResult from "./components/screens/SearchingResult/SearchingResult";
import AutoFillOTP from "./components/screens/Auth/Otp/AutoFillOTP";
import PaymentSuccess from "./components/screens/Payment/PaymentSuccess";
import TravelerInfo from "./components/screens/TravelerInfo/TravelerInfo";
import ForgotPassword from "./components/screens/Auth/ForgotPassword/ForgotPassword";
import AllEvents from "./components/screens/Events/AllEvents";
import Career from "./components/screens/Career/Career";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    });
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
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/cart/" element={<Cart />} />
              <Route path="/result" element={<SearchingResult />} />
              <Route path="/package/view/:id" element={<PackageSingle />} />
              <Route path="/privacy/" element={<Privacy />} />
              <Route path="/cancellation/" element={<Cancellation />} />
              <Route path="/contact-us/" element={<Contact />} />
              <Route path="/discover/" element={<Discover />} />
              <Route path="/login/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/otp/" element={<AutoFillOTP />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/searchingresult" element={<SearchingResult />} />
              <Route path="/paymentsuccess" element={<PaymentSuccess />} />
              <Route path="/traveler-info/:id" element={<TravelerInfo />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/all-events" element={<AllEvents />} />
              <Route path="/career" element={<Career />} />
            </Routes>
          </Router>
        )}
      </div>
    </>
  );
}

export default App;
