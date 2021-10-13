import React from "react";
import { Switch, Route } from "react-router-dom";
import RegisterForm from "../Views/Register";
import LoginForm from "../Views/Login";
import Reports from "../Views/Reports";
import AppRoutes from "./AppRoutes";
import LoginRoute from "./LoginRoutes";
import WhoWeAre from "../Views/WhoWeAre";
import Home from "../Views/Home";
import ContactUs from "../Views/ContactUs";
import ForgotPass from "../Views/ForgotPassword";
import RecoverPass from "../Views/RecoverPassword";
import InfoFerrugem from "../Views/InfoFerrugem";
import InfoCercosporiose from "../Views/InfoCercosporiose";
import InfoMancha from "../Views/InfoMancha";
import AboutUs from "../Views/AboutUs";

export default function Routes() {
  return (
    <Switch>
      <LoginRoute path="/login" component={LoginForm} />
      <LoginRoute path="/register" component={RegisterForm} />
      <LoginRoute path="/forgotpass" component={ForgotPass} />
      <LoginRoute path="/recoverpass" component={RecoverPass} />
      <AppRoutes path="/home" component={Home} />
      <AppRoutes path="/reports" component={Reports} />
      <AppRoutes path="/whoweare" component={WhoWeAre} />
      <AppRoutes path="/contactus" component={ContactUs} />
      <AppRoutes path="/infoferrugem" component={InfoFerrugem} />
      <AppRoutes path="/infocercosporiose" component={InfoCercosporiose} />
      <AppRoutes path="/infomancha" component={InfoMancha} />
      <AppRoutes path="/aboutus" component={AboutUs} />
      <Route path="/">
        <LoginForm />
      </Route>
    </Switch>
  );
}
