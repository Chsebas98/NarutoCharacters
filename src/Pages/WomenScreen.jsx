import React from "react";
import Card from "../Components/Card";
import { Characters } from "../Models/Characters";

const WomenScreen = () => {
  const womens = Characters.filter((personaje) => personaje.type === "m");

  return (
    <div>
      <div className="container mt-3 ">
        <h1>Womens Screens</h1>
        <hr></hr>
        <div className="row">
          {womens.map((personajes) => (
            <Card key={personajes.id} {...personajes} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomenScreen;
