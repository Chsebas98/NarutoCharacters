import React from "react";
import Card from "../Components/Card";
import { Characters } from "../Models/Characters";

const BijuScreen = () => {
  const biju = Characters.filter((bestia) => bestia.type === "b");
  return (
    <div className="container">
      <h1> Biju Screen</h1>
      <hr></hr>
      <div className="row">
        {biju.map((biju) => (
          <Card key={biju.id} {...biju} />
        ))}
      </div>
    </div>
  );
};

export default BijuScreen;
