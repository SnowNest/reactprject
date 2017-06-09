import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

firebase.initializeApp({
  apiKey: "AIzaSyCvcjaAIPM4EBJRQaAuu9J5eNhL1naqaXk",
  authDomain: "reactproject-9456e.firebaseapp.com",
  databaseURL: "https://reactproject-9456e.firebaseio.com",
  projectId: "reactproject-9456e",
  storageBucket: "reactproject-9456e.appspot.com",
  messagingSenderId: "36343747883"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
