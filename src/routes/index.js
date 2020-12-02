import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import SecondaryHome from "../pages/SecondaryHome";
import Projects from "../pages/Projects";
import Courses from "../pages/Courses";
import MerchantRegister from "../pages/MerchantRegister";
import DesignerRegister from "../pages/DesignerRegister";
import MerchantTutorial from "../pages/MerchantTutorial";
import DesignerTutorial from "../pages/DesignerTutorial";
import LoginMerchant from "../pages/LoginMerchant";
import LoginDesigner from "../pages/LoginDesigner";
import HomePostLoginDesigner from "../pages/HomePostLoginDesigner";

const Routes = () => (
  <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/secondary-home" component={SecondaryHome} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/courses" component={Courses} />
    <Route exact path="/merchant-register" component={MerchantRegister} />
    <Route exact path="/designer-register" component={DesignerRegister} />
    <Route exact path="/merchant-tutorial" component={MerchantTutorial} />
    <Route exact path="/designer-tutorial" component={DesignerTutorial} />
    <Route exact path="/login-merchant" component={LoginMerchant} />
    <Route exact path="/login-designer" component={LoginDesigner} />
    <Route exact path="/home-designer" component={HomePostLoginDesigner} />
    <Redirect from="/" exact to="/home" />
  </Switch>
);
export default Routes;
