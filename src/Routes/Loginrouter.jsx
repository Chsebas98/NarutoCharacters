import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";
import LoginScreen from "../Pages/LoginScreen";
import Approuter from "./Approuter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const Loginrouter = () => {
  const { log } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <PublicRouter path="/login" auth={log} component={LoginScreen} />
        <PrivateRouter path="/" auth={log} component={Approuter} />
      </Switch>
    </Router>
  );
};

export default Loginrouter;
