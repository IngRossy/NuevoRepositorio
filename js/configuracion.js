//import firebase from "firebase/app";
//import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyB1A91DYCyiEvkPvq8AbwdVYNDpC3vnFt0",
    authDomain: "asincronicoimc.firebaseapp.com",
    projectId: "asincronicoimc",
    storageBucket: "asincronicoimc.appspot.com",
    messagingSenderId: "857344826521",
    appId: "1:857344826521:web:fc1afabdd96ec288d76c08",
     
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  // Initialize Cloud Firestore and get a reference to the service
  const db = firebase.firestore();
  