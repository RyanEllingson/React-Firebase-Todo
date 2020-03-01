import React from 'react';
import './App.css';
import Container from "./components/Container";
const firebase = require("firebase/app");
// Required for side-effects
require("firebase/firestore");



function App() {
  // Initialize Cloud Firestore through Firebase
  firebase.initializeApp({
    apiKey: 'AIzaSyCMnizv4k6K4lhOQXnZPTjtgpEcqk1JS8M',
    authDomain: 'react-firebase-todo-ec1d6.firebaseapp.com',
    projectId: 'react-firebase-todo-ec1d6'
  });

  const db = firebase.firestore();

  return (
    <div className="App">
      <Container db={db}/>
    </div>
  );
}

export default App;
