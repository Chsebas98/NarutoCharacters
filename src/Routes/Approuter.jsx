import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "../Components/Navbar";
import ManScreen from "../Pages/ManScreen";
import SearchScreen from "../Pages/SearchScreen";
import WomenScreen from "../Pages/WomenScreen";
import BijuScreen from "../Pages/BijuScreen";
import CharacterScreen from "../Pages/CharacterScreen";

const Approuter = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/mans" component={ManScreen} />
        <Route exact path="/womens" component={WomenScreen} />
        <Route exact path="/search" component={SearchScreen} />
        <Route exact path="/bijus" component={BijuScreen} />
        <Route exact path="/character/:id" component={CharacterScreen} />

        {/*         <Redirect to="/mans" /> */}
      </Switch>
    </>
  );
};

export default Approuter;
