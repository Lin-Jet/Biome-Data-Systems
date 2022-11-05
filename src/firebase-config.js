// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ1uLjQxaCWxCrSI714P6IU3wwQC1czfo",
  authDomain: "biome-data-systems-website.firebaseapp.com",
  projectId: "biome-data-systems-website",
  storageBucket: "biome-data-systems-website.appspot.com",
  messagingSenderId: "989619660413",
  appId: "1:989619660413:web:2a904a168d132a5bbb7314",
  measurementId: "G-DX2T76TPDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);