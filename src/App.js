import "./App.css";

// import Header from "./components/screens/Header/Header";
import Home from "./components/screens/Home/Spotlight/Home";
import { Helmet } from "react-helmet";
import Cart from "./components/screens/Cart/Cart";

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
      <Home />
      <Cart />
    </>
  );
}

export default App;
