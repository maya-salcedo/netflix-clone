import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import axios from 'axios';

import * as ROUTES from './constants/routes';
import { FirebaseContext } from './context/firebase';

import { Browse, Home, Signin, Signup } from './pages';

function App() {
  const [envs, setEnvs] = useState();

  const getData = async () => {
    try {
      const { data } = await axios.get('/testServer');
      setEnvs(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const config = {
    apiKey: 'AIzaSyCFhyVH0yk4sn-ZVR7EBjv1JlJJspFPvJU',
    authDomain: 'netflix-clone-a34fd.firebaseapp.com',
    projectId: 'netflix-clone-a34fd',
    storageBucket: 'netflix-clone-a34fd.appspot.com',
    messagingSenderId: '938061924242',
    appId: '1:938061924242:web:0f3d0ffdc32468fd6f634b',
  };

  let firebase;
  if (!getApps().length) {
    firebase = initializeApp(config);
  } else {
    firebase = getApp();
  }
  // apiKey: envs?.apiKey,
  //   authDomain: envs?.authDomain,
  //   projectId: envs?.projectId,
  //   storageBucket: envs?.storageBucket,
  //   messagingSenderId: envs?.messagingSenderId,
  //   appId: envs?.appId,
  return (
    <FirebaseContext.Provider
      value={{
        firebase: firebase,
      }}
    >
      <Router>
        <Switch>
          <Route path={ROUTES.SIGN_IN}>
            <Signin />
          </Route>
          <Route path={ROUTES.SIGN_UP}>
            <Signup />
          </Route>
          <Route path={ROUTES.BROWSE}>
            <Browse />
          </Route>
          <Route path={ROUTES.HOME}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </FirebaseContext.Provider>
  );
}

export default App;
