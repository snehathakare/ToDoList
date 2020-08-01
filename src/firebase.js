import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCVho3TCKWC05B8wv5CQNP3c6VPRfEfFNA",
    authDomain: "todo-list-2aabc.firebaseapp.com",
    databaseURL: "https://todo-list-2aabc.firebaseio.com",
    projectId: "todo-list-2aabc",
    storageBucket: "todo-list-2aabc.appspot.com",
    messagingSenderId: "886078210093",
    appId: "1:886078210093:web:56c4a98201c0a14b9a38a4",
    measurementId: "G-806ZM2PZ0L"
  });

  const db = firebaseApp.firestore() ;

  export default db;

