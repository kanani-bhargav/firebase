// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl8XHTKLK4pd12s8ubzklxAkgx-pochu8",
  authDomain: "react-firebase-d5c87.firebaseapp.com",
  projectId: "react-firebase-d5c87",
  storageBucket: "react-firebase-d5c87.appspot.com",
  messagingSenderId: "88102280540",
  appId: "1:88102280540:web:1731cb7b876d5b52177599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
