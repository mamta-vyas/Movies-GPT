// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnDAYcIi2RC5XWl6M4MWh22RlYTrZc11o",
  authDomain: "netflixgpt-97c48.firebaseapp.com",
  projectId: "netflixgpt-97c48",
  storageBucket: "netflixgpt-97c48.appspot.com",
  messagingSenderId: "998859428816",
  appId: "1:998859428816:web:7c549fa1d8ddef0d6bdfd5",
  measurementId: "G-SE7DVT7Y9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();