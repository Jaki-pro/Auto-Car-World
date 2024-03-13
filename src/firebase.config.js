// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKaB0ZJW-xvgpmN5kp-2l09P5MIiCO1CU",
  authDomain: "auto-car-world.firebaseapp.com",
  projectId: "auto-car-world",
  storageBucket: "auto-car-world.appspot.com",
  messagingSenderId: "475270001117",
  appId: "1:475270001117:web:7a6630746ad6e0922d4634"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;