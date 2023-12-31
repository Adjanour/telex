// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1jVDdIszaN9C78SG2tWvk3IKU_Gzdicw",
  authDomain: "react-project-1f3a2.firebaseapp.com",
  projectId: "react-project-1f3a2",
  storageBucket: "react-project-1f3a2.appspot.com",
  messagingSenderId: "338284542079",
  appId: "1:338284542079:web:b77dea958b956c3ccae74a",
  measurementId: "G-QKLCLJPJM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();