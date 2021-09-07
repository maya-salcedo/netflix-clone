import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SIGN_IN}>
          <p>This is sign in page</p>
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <p>This is sign up page</p>
        </Route>
        <Route path={ROUTES.BROWSE}>
          <p>This is browse page</p>
        </Route>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
