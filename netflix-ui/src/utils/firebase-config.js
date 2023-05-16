
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD3iL9FLHj8j4Gqg9O_AafkoCgTtSXUANI",
  authDomain: "react-netflix-clone-4aeab.firebaseapp.com",
  projectId: "react-netflix-clone-4aeab",
  storageBucket: "react-netflix-clone-4aeab.appspot.com",
  messagingSenderId: "610521544851",
  appId: "1:610521544851:web:24fefb2674cb294274f566",
  measurementId: "G-XMBJMV0Z26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);