import "./App.css";
import Home from "./components/screens/Home/Spotlight/Home";
import { Helmet } from "react-helmet";
import Cart from "./components/screens/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PackageSingle from "./components/screens/Package/PackageSingle/PackageSingle";

function App() {
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
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/cart/' element={<Cart />} />
            <Route path='/package-single/' element={<PackageSingle />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
