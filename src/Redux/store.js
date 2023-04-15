import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Auth/auth";
import stateReducer from "./Home/state";
import eventReducer from "./Home/event";
import packageReducer from "./Home/package";
import cartReducer from "./Cart/cart";
import contactReducer from "./Contact/contact";
import packageViewReducer from "./Package/packageView";
import quickFactReducer from "./Package/quickFact";
import questionReducer from "./Package/question";
import travelIncludeReducer from "./Package/TravelIncludes";
import itineraryReducer from "./Package/itinerary";
import gearReducer from "./Package/gears";
import reviewReducer from "./Discover/clientCard";
import careerReducer from "./Career/career";
import passwordReducer from "./Auth/forgotPassword";
import categoryReducer from "./Home/category";
import cityReducer from "./Home/city";

const store = configureStore({
  reducer: {
    user: userReducer,
    state: stateReducer,
    event: eventReducer,
    package: packageReducer,
    cart: cartReducer,
    contact: contactReducer,
    packageView: packageViewReducer,
    quickFact: quickFactReducer,
    question: questionReducer,
    travelInclude: travelIncludeReducer,
    itinerary: itineraryReducer,
    gear: gearReducer,
    review: reviewReducer,
    career: careerReducer,
    password: passwordReducer,
    category: categoryReducer,
    city: cityReducer,
  },
});

export default store;
