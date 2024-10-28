import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYN55Qpf_o5xY9dDhniryQziz08d0tEDY",
  authDomain: "clone-2024-d9b68.firebaseapp.com",
  projectId: "clone-2024-d9b68",
  storageBucket: "clone-2024-d9b68.appspot.com",
  messagingSenderId: "61998021842",
  appId: "1:61998021842:web:9482c15e654a28a746410b",
  measurementId: "G-6JCTZCN54D"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db = app.firestore();
