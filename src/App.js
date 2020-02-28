import React from 'react';
import logo from './logo.svg';
import './App.css';
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

  db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });

  // Add a second document with a generated ID.
  db.collection("users").add({
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });

  db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
  });

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
