// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVBCJ_qOQ7NT84_5K-Gm1KYANoORVGItg",
  authDomain: "todo-app-50ada.firebaseapp.com",
  projectId: "todo-app-50ada",
  storageBucket: "todo-app-50ada.firebasestorage.app",
  messagingSenderId: "579640786639",
  appId: "1:579640786639:web:0398e2d47bad151265c1ba",
  measurementId: "G-L562PPZKQX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
