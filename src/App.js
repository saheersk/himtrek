import "./App.css";
import Home from "./components/screens/Home/Spotlight/Home";
import { Helmet } from "react-helmet";
import Cart from "./components/screens/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/screens/Auth/Login/Login";
import SignUp from "./components/screens/Auth/SignUp/SignUp";
import Otp from "./components/screens/Auth/Otp/Otp";
import AboutUs from "./components/screens/Auth/AboutUs/AboutUs";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HimTrek - Your Travelling Partner </title>
        <link
          rel="icon"
          href={require("./components/assets/images/himtrek-logo.svg").default}
        />
      </Helmet>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cart/" element={<Cart />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/signUp/" element={<SignUp />} />
            <Route path="/otp/" element={<Otp />} />
            <Route path="/aboutus/" element={<AboutUs />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
