import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Shared/Navbar";
import { routes } from "./Routes";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              exact
              path={route.path}
              component={route.component}
              key={index}
            />
          );
        })}
        <Route exact path="/">
          <h1 style={{ textAlign: "center" }}>Choose the type of chart</h1>
        </Route>
      </Switch>
    </>
  );
};

export default App;
