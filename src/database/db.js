const firebase = require("firebase/app");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: 'AIzaSyCMnizv4k6K4lhOQXnZPTjtgpEcqk1JS8M',
      authDomain: 'react-firebase-todo-ec1d6.firebaseapp.com',
      projectId: 'react-firebase-todo-ec1d6'
    });
}

export const db = firebase.firestore();