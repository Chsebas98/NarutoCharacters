import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "../Components/Navbar";
import LoadingScreen from "../Pages/LoadingScreen";
const CharacterScreen = lazy(() => import("../Pages/CharacterScreen"));
const BijuScreen = lazy(() => import("../Pages/BijuScreen"));
const CharactersScreen = lazy(() => import("../Pages/CharactersScreen"));
const WomenScreen = lazy(() => import("../Pages/WomenScreen"));
const ManScreen = lazy(() => import("../Pages/ManScreen"));
const SearchScreen = lazy(() => import("../Pages/SearchScreen"));

const Approuter = () => {
  return (
    <>
      <Navbar />

      <Suspense fallback={<LoadingScreen />}>
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
      </Suspense>
    </>
  );
};

export default Approuter;
