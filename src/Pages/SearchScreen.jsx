import React, { useState } from "react";

const SearchScreen = ({ history }) => {
  const [search, setSearch] = useState();

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?search=${search}`);
  };

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
                value={search}
                onChange={handleChange}
                type="text"
              ></input>
            </label>
            <button className="btn btn-info w-100" type="submit">
              Buscar
            </button>
          </form>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
};

export default SearchScreen;
