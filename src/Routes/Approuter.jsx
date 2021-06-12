import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "../Components/Navbar";
import ManScreen from "../Pages/ManScreen";
import SearchScreen from "../Pages/SearchScreen";
import WomenScreen from "../Pages/WomenScreen";
import BijuScreen from "../Pages/BijuScreen";
import CharacterScreen from "../Pages/CharacterScreen";
import CharactersScreen from "../Pages/CharactersScreen";

const Approuter = () => {
  return (
    <>
      <Navbar />
      <Switch>
        {/* TODOS LOS PERSONAJES */}
        <Route exact path="/characters" component={CharactersScreen} />
        {/* Resto */}
        <Route exact path="/mans" component={ManScreen} />
        <Route exact path="/womens" component={WomenScreen} />
        <Route exact path="/search" component={SearchScreen} />
        <Route exact path="/bijus" component={BijuScreen} />
        <Route exact path="/character/:id" component={CharacterScreen} />

        <Redirect to="/characters" />
      </Switch>
    </>
  );
};

export default Approuter;
