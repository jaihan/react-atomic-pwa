import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import HomePage from "../pages/HomePage";
import WithAuthenticate from "../components/templates/WithAuthenticate";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={"/"}
          exact
          component={WithAuthenticate(SignInPage, HomePage)}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
