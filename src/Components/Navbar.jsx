import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          <img
            src="/assets/sharinga.png"
            alt=""
            width="24"
            height="24"
            className="d-inline-block align-text-top mx-2"
          ></img>
          Personajes
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                Hombres
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Mujeres
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Buscar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
