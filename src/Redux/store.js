import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Auth/auth'
import stateReducer from './Home/state'
import eventReducer from './Home/event'
import packageReducer from './Home/package'
import cartReducer from './Cart/cart'
import contactReducer from './Contact/contact'

const store = configureStore({
    reducer: {
        user: userReducer,
        state: stateReducer,
        event: eventReducer,
        package: packageReducer,
        cart: cartReducer,
        contact: contactReducer
    },
});

export default store;
