import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { config } from './utils/firebaseConfig';
import { GlobalStyle } from './global-styles';
import { FirebaseContext } from './context/firebase';

//Uncomment after seeding to avoid duplicates
//import { seedDatabase } from './seed';

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyle />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);
