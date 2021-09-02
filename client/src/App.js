import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <p>This is sign in page</p>
        </Route>
        <Route path="/signup">
          <p>This is sign up page</p>
        </Route>
        <Route path="/browse">
          <p>This is browse page</p>
        </Route>
        <Route path="/">
          <p>This is home page</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
