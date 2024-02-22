// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realestate-68f1d.firebaseapp.com",
  projectId: "mern-realestate-68f1d",
  storageBucket: "mern-realestate-68f1d.appspot.com",
  messagingSenderId: "198625527803",
  appId: "1:198625527803:web:b7351f86989979e127ed5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
