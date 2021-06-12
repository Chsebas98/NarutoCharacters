import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "../Pages/LoginScreen";
import Approuter from "./Approuter";

const Loginrouter = () => {
  return (
    <Router>
      <Approuter />

      <Switch>
        <Route exact path="/login" component={LoginScreen} />
      </Switch>
    </Router>
  );
};

export default Loginrouter;
