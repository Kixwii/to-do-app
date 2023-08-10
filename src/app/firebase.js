// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXYVm7vCkhumSXh3YQGY_Y5ekwUHEt6Og",
  authDomain: "to-do-app-4f203.firebaseapp.com",
  projectId: "to-do-app-4f203",
  storageBucket: "to-do-app-4f203.appspot.com",
  messagingSenderId: "476237332895",
  appId: "1:476237332895:web:85b964b33416d8322d3daa",
  measurementId: "G-YM6C9HQPVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);