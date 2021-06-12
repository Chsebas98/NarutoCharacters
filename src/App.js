import React, { useEffect, useReducer } from "react";
import Loginrouter from "./Routes/Loginrouter";
import { AuthContext } from "./Auth/AuthContext";
import { authReducer } from "./Reducers/authReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("log")) || { log: false };
};

const App = () => {
  const [log, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("log", JSON.stringify(log));
  }, [log]);

  return (
    <AuthContext.Provider value={{ log, dispatch }}>
      <Loginrouter />
    </AuthContext.Provider>
  );
};

export default App;
