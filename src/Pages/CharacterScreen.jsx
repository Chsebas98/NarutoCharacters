import React from "react";
import { useParams } from "react-router";
import { Characters } from "../Models/Characters";

const CharacterScreen = ({ history }) => {
  const { id } = useParams();

  const { type, name, description } = Characters.find(
    (character) => character.id === id
  );

  const path = `/assets/${type}-${name}.png`;

  const handleback = () => {
    history.goBack();
  };

  return (
    <div className="container row mt-5">
      <div className="col-8">
        <img
          className="img-thumbnail"
          src={path}
          alt={id}
          style={{
            width: "100%",
            height: "35rem",
          }}
        ></img>
      </div>
      <div className="col-4">
        <h2>Nombre:{name}</h2>
        <p>Descripción: {description}</p>
        <hr></hr>
        <button className="btn btn-warning" onClick={handleback}>
          Regresa
        </button>
      </div>
    </div>
  );
};

export default CharacterScreen;
