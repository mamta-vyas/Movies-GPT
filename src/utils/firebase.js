// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "movie-gpt-94687.firebaseapp.com",
  projectId: "movie-gpt-94687",
  storageBucket: "movie-gpt-94687.appspot.com",
  messagingSenderId: "949603028442",
  appId: "1:949603028442:web:aa04a88736e9d74d8cc4e3",
  measurementId: "G-7T28V3BG1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);