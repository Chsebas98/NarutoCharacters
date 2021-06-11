import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ name, description, type, id }) => {
  const path = `/assets/${type}-${name}.png`;
  return (
    <div className="container d-flex">
      <div className="card m-3 " style={{ width: "18rem" }}>
        <img className="card-img-top" src={path} alt={name}></img>
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">
            <Link className="card-link" to={`/characters/${id}`}>
              Ver Más ...
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
};

export default Card;
