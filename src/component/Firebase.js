// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCm1enyo3LzMizEWc7fTHQsJFVa5VqxfA",
  authDomain: "code-firebase-de028.firebaseapp.com",
  projectId: "code-firebase-de028",
  storageBucket: "code-firebase-de028.appspot.com",
  messagingSenderId: "667729957571",
  appId: "1:667729957571:web:cd608d00b5264495be0876",
  databaseURL: "https://code-firebase-de028-default-rtdb.asia-southeast1.firebasedatabase.app/",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db=getFirestore(app)
export const realtimeDB = getDatabase(app);
export const storage = getStorage(app);
