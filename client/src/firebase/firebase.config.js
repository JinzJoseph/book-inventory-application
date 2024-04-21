// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDePDFSkE4YF_JDgnXg10kbNnLeh5dOtTQ",
  authDomain: "mern-book-9d2cd.firebaseapp.com",
  projectId: "mern-book-9d2cd",
  storageBucket: "mern-book-9d2cd.appspot.com",
  messagingSenderId: "266921506067",
  appId: "1:266921506067:web:d00e822e03d061796696e6"
};

// Initialize Firebase
   const app = initializeApp(firebaseConfig);
   export default app