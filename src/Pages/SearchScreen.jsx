import React from "react";

const SearchScreen = () => {
  return (
    <div className="container">
      <h1>Search Screen</h1>
      <hr></hr>
      <div className="row">
        <div className="col-6">
          <h2>Buscar</h2>
          <form>
            <label className="form-label w-100">
              Personaje:
              <input
                placeholder="Nombre del personaje"
                className="form-control"
                autocomplete="off"
                value={""}
                onChange={""}
                type="text"
              ></input>
            </label>
          </form>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
};

export default SearchScreen;
