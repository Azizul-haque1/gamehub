// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0SZij8aLMRpv-KFg9Vz7Tkq6jNoTHKYM",
  authDomain: "gamehub-a1bc8.firebaseapp.com",
  projectId: "gamehub-a1bc8",
  storageBucket: "gamehub-a1bc8.firebasestorage.app",
  messagingSenderId: "495367593273",
  appId: "1:495367593273:web:71a3a8a2a4b053e0571ce8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
