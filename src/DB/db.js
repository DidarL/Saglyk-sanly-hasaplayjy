import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBjbdvjujjL6pOYrEtRsUrvR-zKwOeh97o",
  authDomain: "chat-saglyk.firebaseapp.com",
  projectId: "chat-saglyk",
  storageBucket: "chat-saglyk.appspot.com",
  messagingSenderId: "571127919596",
  appId: "1:571127919596:web:5e62a44f72001e6f3e86c9",
  measurementId: "G-M6KP4HW7EK"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
export default db; 