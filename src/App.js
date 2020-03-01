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

  // db.collection("users").add({
  //   first: "Ada",
  //   last: "Lovelace",
  //   born: 1815
  // })
  // .then(function(docRef) {
  //   console.log("Document written with ID: ", docRef.id);
  // })
  // .catch(function(error) {
  //   console.error("Error adding document: ", error);
  // });

  // // Add a second document with a generated ID.
  // db.collection("users").add({
  //   first: "Alan",
  //   middle: "Mathison",
  //   last: "Turing",
  //   born: 1912
  // })
  // .then(function(docRef) {
  //   console.log("Document written with ID: ", docRef.id);
  // })
  // .catch(function(error) {
  //   console.error("Error adding document: ", error);
  // });

  // db.collection("users").get().then((querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id);
  //     console.log(doc.data());
  //   });
  // });

  return (
    <div className="App">
      <Container db={db}/>
    </div>
  );
}

export default App;
