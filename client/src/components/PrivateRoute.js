import React from "react";
import {Route} from "react-router-dom";
import {Redirect} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...e }) => {
    return (
        <Route
            {...e}
            render={props => {
                if (localStorage.getItem("token")) {
                    return <Component {...props} />;
                } else {
                    return <Redirect to="/" />;
                }
            }}
        />
    );
};

export default PrivateRoute;