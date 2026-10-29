// Import the functions you need from the SDKs you need
import { initializeApp , getApp , getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC46ksVPtiRMvh6OA_qfiGK4j2KKNt2b88",
  authDomain: "propwise-9c677.firebaseapp.com",
  projectId: "propwise-9c677",
  storageBucket: "propwise-9c677.firebasestorage.app",
  messagingSenderId: "809307918011",
  appId: "1:809307918011:web:5c7fbf1facd833ecff239e",
  measurementId: "G-6TWE6TN1D7"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth =getAuth(app)
export const dp =getFirestore(app)
