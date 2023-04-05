// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD60ldF5bheDPM78mZEU74-sX2x4GEbCpA",
  authDomain: "hs-todo.firebaseapp.com",
  projectId: "hs-todo",
  storageBucket: "hs-todo.appspot.com",
  messagingSenderId: "649801068532",
  appId: "1:649801068532:web:d2291d6fcc15bd10ba53a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
