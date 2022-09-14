// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDySf4Aa80V8qcuUKeDVG68T2jI2hSTypI",
  authDomain: "mechfuse-news-60a77.firebaseapp.com",
  projectId: "mechfuse-news-60a77",
  storageBucket: "mechfuse-news-60a77.appspot.com",
  messagingSenderId: "404268817477",
  appId: "1:404268817477:web:77027c2ef3014d7b74d72c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;