// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD0wxH-y81esl7ChkeinTUf8hRsHcdo8yc",
    authDomain: "erkata-tutors.firebaseapp.com",
    projectId: "erkata-tutors",
    storageBucket: "erkata-tutors.firebasestorage.app",
    messagingSenderId: "1048111924357",
    appId: "1:1048111924357:web:993a0eda68126075c8d5ec",
    measurementId: "G-SM8SF1WN7W"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
