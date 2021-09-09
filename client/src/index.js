import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import './index.css';
import App from './App';
import { GlobalStyle } from './global-styles';
import { FirebaseContext } from './context/firebase';

dotenv.config();

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
};

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
