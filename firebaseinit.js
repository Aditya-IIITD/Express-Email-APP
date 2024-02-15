// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "email-app-2c57b.firebaseapp.com",
  projectId: "email-app-2c57b",
  storageBucket: "email-app-2c57b.appspot.com",
  messagingSenderId: "227371130710",
  appId: "1:227371130710:web:c4ff83fc01d0eae91fc0f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
