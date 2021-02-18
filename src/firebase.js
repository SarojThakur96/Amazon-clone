import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCAlyvApySm_zYLhGFdpAmyosIPIensaWE",
    authDomain: "app-51667.firebaseapp.com",
    databaseURL: "https://app-51667.firebaseio.com",
    projectId: "app-51667",
    storageBucket: "app-51667.appspot.com",
    messagingSenderId: "557334935490",
    appId: "1:557334935490:web:d493bb8a77ff563580c85b",
  
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export { db, auth};