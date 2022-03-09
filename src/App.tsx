import React from 'react';
import { Switch, Route } from "react-router-dom"

import Navbar from './shared/Navbar';
import { routes } from './routes';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route exact path={route.path} component={route.component} key={index} />
          )
        })}
      </Switch>
    </>
  )
}

export default App;