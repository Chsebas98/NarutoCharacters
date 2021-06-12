import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import { authTypes } from "../Types/authTypes";

const LoginScreen = () => {
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);
  const handleLogin = () => {
    dispatch({ type: authTypes.login });

    history.push("/characters");
  };

  return (
    <div className="container mt-5 text-center">
      <img src="/assets/sharingan.gif" alt="gif sharingan"></img>
      <h1 className="my-3">Login Screen</h1>
      <button className="btn btn-success" onClick={handleLogin}>
        Iniciar Sesión
      </button>
    </div>
  );
};

export default LoginScreen;
