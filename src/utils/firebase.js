// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDIaqYz6eMvguoDLeCXwpN-N-YPnQ0-D0",
  authDomain: "movies-gpt-508cc.firebaseapp.com",
  projectId: "movies-gpt-508cc",
  storageBucket: "movies-gpt-508cc.appspot.com",
  messagingSenderId: "37058728954",
  appId: "1:37058728954:web:c31c78adbf238ab2514a43",
  measurementId: "G-ZWJFWX4689"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();