// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDocRB2jVDeG5uLpNjuwSKKc2oa4Y0HUhE",
    authDomain: "fashion-mart-80a97.firebaseapp.com",
    projectId: "fashion-mart-80a97",
    storageBucket: "fashion-mart-80a97.firebasestorage.app",
    messagingSenderId: "821865634233",
    appId: "1:821865634233:web:0fdf1a89f8650c30e67e68",
    measurementId: "G-FLW7SJ66LL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db  = getFirestore(app);
export { db, auth};
