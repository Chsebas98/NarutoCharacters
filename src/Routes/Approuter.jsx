import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Navbar from "../Components/Navbar";
import ManScreen from "../Pages/ManScreen";
import SearchScreen from "../Pages/SearchScreen";
import WomenScreen from "../Pages/WomenScreen";
import BijuScreen from "../Pages/BijuScreen";

const Approuter = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/man" component={ManScreen} />
        <Route exact path="/womens" component={WomenScreen} />
        <Route exact path="/search" component={SearchScreen} />
        <Route exact path="/bijus" component={BijuScreen} />
        <Redirect exact path="/man" />
      </Switch>
    </>
  );
};

export default Approuter;
