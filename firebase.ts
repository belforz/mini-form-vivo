// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq6zRERAaASywItZWLPGjwvkOOtG8ipm0",
  authDomain: "mini-form-vivo.firebaseapp.com",
  projectId: "mini-form-vivo",
  storageBucket: "mini-form-vivo.appspot.com",
  messagingSenderId: "80534345923",
  appId: "1:80534345923:web:32197c1b5662084e56aa76",
  measurementId: "G-CENB2T2KKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);