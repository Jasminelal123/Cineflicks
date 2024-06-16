// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaPZa4aiKWhIAdKDzDoLZuiAip94EYX1E",
  authDomain: "netfix-gpt-1ee3d.firebaseapp.com",
  projectId: "netfix-gpt-1ee3d",
  storageBucket: "netfix-gpt-1ee3d.appspot.com",
  messagingSenderId: "597328112092",
  appId: "1:597328112092:web:1bb5ad9ae158a4bd50c719",
  measurementId: "G-T12X0FEMVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export  const auth = getAuth();