import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCyNjjCZzAzeKDUqCUvXCuYZL6QBIwZa9Q",
  authDomain: "book-ef46a.firebaseapp.com",
  projectId: "book-ef46a",
  storageBucket: "book-ef46a.appspot.com",
  messagingSenderId: "1055170248343",
  appId: "1:1055170248343:web:5e511fc13b7824ba0673d2"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();