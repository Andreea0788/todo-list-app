import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCQUTVeVrQu5MM-5GL-7tzs7y9ljusg2D0",
  authDomain: "todo-list-app-818e1.firebaseapp.com",
  databaseURL: "https://todo-list-app-818e1.firebaseio.com",
  projectId: "todo-list-app-818e1",
  storageBucket: "todo-list-app-818e1.appspot.com",
  messagingSenderId: "788263253032",
  appId: "1:788263253032:web:f3120b1e8eb52a069e711d",
});

const db = firebaseApp.firestore();

export default db;
