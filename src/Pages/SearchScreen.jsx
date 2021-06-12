import React, { useState } from "react";

const SearchScreen = ({ history }) => {
  const [inputValue, setInputValue] = useState();

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputValue);
    history.push(`?q=${inputValue}`);
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
                type="text"
                value={inputValue}
                onChange={handleChange}
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
