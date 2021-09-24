import React from "react";
import { Route } from "react-router-dom";

const LoginRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default LoginRoute;
