// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "movie-gpt-28192.firebaseapp.com",
  projectId: "movie-gpt-28192",
  storageBucket: "movie-gpt-28192.firebasestorage.app",
  messagingSenderId: "522845664347",
  appId: "1:522845664347:web:9b19874b049a07c1cebb7e",
  measurementId: "G-5LG7R29M7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);