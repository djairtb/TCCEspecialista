import React from "react";
import { Switch, Route } from "react-router-dom";
import RegisterForm from "../Views/Register";
import LoginForm from "../Views/Login";
import Reports from "../Views/Reports";
import AppRoutes from "./AppRoutes";
import LoginRoute from "./LoginRoutes";
import RegisterRoute from "./RegisterRoutes"
import WhoWeAre from "../Views/WhoWeAre";
import Home from "../Views/Home";
import ContactUs from "../Views/ContactUs";
import ForgotPass from "../Views/ForgotPassword";
import RecoverPass from "../Views/RecoverPassword";

export default function Routes() {
  return (
    <Switch>
      <LoginRoute path="/login" component={LoginForm} />
      <RegisterRoute path="/register" component={RegisterForm} />
      <RegisterRoute path="/forgotpass" component={ForgotPass} />
      <RegisterRoute path="/recoverpass" component={RecoverPass} />
      <AppRoutes path="/home" component={Home} />
      <AppRoutes path="/reports" component={Reports} />
      <AppRoutes path="/whoweare" component={WhoWeAre} />
      <AppRoutes path="/contactus" component={ContactUs} />
      <Route path="/">
        <LoginForm />
      </Route>
    </Switch>
  );
}
