// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYeO_oN8vi04oevMwTzHFSCuxOCgbLHe8",
    authDomain: "expense-tracker-main-e0bd5.firebaseapp.com",
    projectId: "expense-tracker-main-e0bd5",
    storageBucket: "expense-tracker-main-e0bd5.appspot.com",
    messagingSenderId: "783102988208",
    appId: "1:783102988208:web:d6ec4c3ed4234ecfe89075",
    measurementId: "G-X9CY13M949"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();