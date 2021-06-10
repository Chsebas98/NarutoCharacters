import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const handleLogout = () => {
    history.replace("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/man">
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/man">
                Hombres
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/womens">
                Mujeres
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/bijus">
                Biju
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">
                Buscar
              </NavLink>
            </li>
          </ul>
          <div className="d-flex ">
            <button className="btn btn-danger" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
