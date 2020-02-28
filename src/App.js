import React from 'react';
import logo from './logo.svg';
import './App.css';
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyCMnizv4k6K4lhOQXnZPTjtgpEcqk1JS8M',
  authDomain: 'react-firebase-todo-ec1d6.firebaseapp.com',
  projectId: 'react-firebase-todo-ec1d6'
});

const db = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I have edited the thing.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
