import React from "react";
import { useHistory } from "react-router";

const LoginScreen = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push("/mans");
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
