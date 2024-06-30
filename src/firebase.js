import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwGnEk5K1972Suuh0IkhyEBpiKBc_6a7U",
  authDomain: "stock-trivia.firebaseapp.com",
  projectId: "stock-trivia",
  storageBucket: "stock-trivia.appspot.com",
  messagingSenderId: "236081951288",
  appId: "1:236081951288:web:13099227737565dc34accd",
  measurementId: "G-0XHLRBEY53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };