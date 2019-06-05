import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './home';
import { ClickOutside } from './click-outside';
import { Breakpoints } from './breakpoints';

import './app.css';

function App() {
  return (
    <Switch>
      <Route component={Home} exact path="/" />>
      <Route component={ClickOutside} path="/click-outside" />
      <Route component={Breakpoints} path="/breakpoints" />
    </Switch>
  );
}

export default App;
