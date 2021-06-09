import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Navbar from "../Components/Navbar";
import ManScreen from "../Pages/ManScreen";
import SearchScreen from "../Pages/SearchScreen";
import WomenScreen from "../Pages/WomenScreen";

const Approuter = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/man" component={ManScreen} />
        <Route exact path="/women" component={WomenScreen} />
        <Route exact path="/search" component={SearchScreen} />
        <Redirect to="/mans" />
      </Switch>
    </>
  );
};

export default Approuter;
