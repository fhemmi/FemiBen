// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXIfCV2SE-8osIA3WCDhDHdqlJHUSTpZw",
  authDomain: "femi-portfolio-d0467.firebaseapp.com",
  projectId: "femi-portfolio-d0467",
  storageBucket: "femi-portfolio-d0467.firebasestorage.app",
  messagingSenderId: "318548878895",
  appId: "1:318548878895:web:e4a5cf80420eedb2be08da",
  measurementId: "G-PGHCD4F23C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;