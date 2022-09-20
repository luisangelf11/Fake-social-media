// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9SCzB03la1FwC24lCE8CVgFmNYWF41Is",
  authDomain: "social-media-32108.firebaseapp.com",
  projectId: "social-media-32108",
  storageBucket: "social-media-32108.appspot.com",
  messagingSenderId: "504063914922",
  appId: "1:504063914922:web:73c83a0872e7e30e0cf1d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);