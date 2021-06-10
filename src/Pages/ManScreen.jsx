import React from "react";
import { Characters } from "../Models/Characters";

const ManScreen = () => {
  const mans = Characters.filter((personaje) => personaje.type === "h");
  console.log(mans);
  return (
    <div className="container mt-3">
      <h1>Mans</h1>
      <hr></hr>
      {mans.map((personajes) => (
        <h1>{personajes.name}</h1>
      ))}
    </div>
  );
};

export default ManScreen;
