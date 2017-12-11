import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';
import './index.css';

firebase.initializeApp({
  apiKey: "AIzaSyCNDKrl9EBCcgGw_YV8PZuioxHcXRVdT0E",
  authDomain: "chambo-99b43.firebaseapp.com",
  databaseURL: "https://chambo-99b43.firebaseio.com",
  projectId: "chambo-99b43",
  storageBucket: "chambo-99b43.appspot.com",
  messagingSenderId: "952379940282"
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
