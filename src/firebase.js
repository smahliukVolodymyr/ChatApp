import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDeOuc2TT_dd-R-u82QGYCwWpWvaV19mPU",
  authDomain: "chat-dd317.firebaseapp.com",
  projectId: "chat-dd317",
  storageBucket: "chat-dd317.appspot.com",
  messagingSenderId: "558130629268",
  appId: "1:558130629268:web:26057f7b8cced3ad078281",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
