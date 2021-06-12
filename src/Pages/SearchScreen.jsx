import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { Characters } from "../Models/Characters";
import Card from "../Components/Card";

const SearchScreen = ({ history }) => {
  const location = useLocation();

  const { query = "" } = queryString.parse(location.search);

  /* console.log(param); */

  const [buscar, setBuscar] = useState(query);
  const [personaje, setPersonaje] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setBuscar(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(buscar);
    history.push(`?query=${buscar}`);
  };

  const getPersonaje = () => {
    if (buscar.trim() !== "") {
      const value = buscar.toLocaleLowerCase();
      const newValue = Characters.filter((personaje) =>
        personaje.name.toLowerCase().includes(value)
      );
      setPersonaje(newValue);
    } else {
      setPersonaje([]);
    }
  };

  useEffect(() => {
    getPersonaje();
  }, [query]);

  return (
    <div className="container">
      <h1>Search Screen</h1>
      <hr></hr>
      <div className="row">
        <div className="col-6">
          <h2>Buscar</h2>
          <form onSubmit={handleSubmit}>
            <label className="form-label w-100">
              Personaje:
              <input
                placeholder="Nombre del personaje"
                className="form-control"
                autoComplete="off"
                type="text"
                value={buscar}
                onChange={handleChange}
              ></input>
            </label>
            <button className="btn btn-info w-100" type="submit">
              Buscar
            </button>
          </form>
        </div>
        {/* BUSQUEDA DE LOS PERSONAJES */}
        <div className="col-6">
          <h2>Resultados:{personaje.length}</h2>
          {personaje.length === 0 && (
            <div className="alert alert-warning">
              Porfavor busque un personaje
            </div>
          )}
          {/* Buscar */}
          {personaje.map((pers) => (
            <Card key={pers.id} {...pers} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
