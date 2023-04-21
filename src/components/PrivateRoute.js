import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ isLoggedIn, children }) {
    const location = useLocation();
return isLoggedIn ? children : <Navigate to={{pathname: "/login", search: `?next=${location.pathname}` }} />;
}

export default PrivateRoute;
