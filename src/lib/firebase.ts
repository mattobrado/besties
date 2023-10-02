import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVB3mYRi4_xUc7PLa_jBVeuBnXL3cfqlQ",
  authDomain: "myplace-618e9.firebaseapp.com",
  projectId: "myplace-618e9",
  storageBucket: "myplace-618e9.appspot.com",
  messagingSenderId: "147396224707",
  appId: "1:147396224707:web:2de887be6457f5c8bde476",
  measurementId: "G-BBLRDZ4SD1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
