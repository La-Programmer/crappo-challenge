// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8HYvHxtdphHUeRZYQmg3L6EjAxFx5BA0",
  authDomain: "crappo-d4583.firebaseapp.com",
  projectId: "crappo-d4583",
  storageBucket: "crappo-d4583.appspot.com",
  messagingSenderId: "24544792527",
  appId: "1:24544792527:web:148e870ad8fec372a64cba",
  measurementId: "G-94SHJ9210B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);