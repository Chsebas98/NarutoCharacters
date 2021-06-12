import React from "react";
import Card from "../Components/Card";
import { Characters } from "../Models/Characters";

const CharactersScreen = () => {
  const all = Characters;
  return (
    <div className="container">
      <div className="row">
        {all.map((personajes) => (
          <Card key={personajes.id} {...personajes} />
        ))}
      </div>
    </div>
  );
};

export default CharactersScreen;
