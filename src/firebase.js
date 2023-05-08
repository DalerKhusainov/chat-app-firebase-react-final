import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMUv5l-ctAQ-VHEEiH2QPE002nCF9tpF4",
  authDomain: "react-chat-app-lamadev.firebaseapp.com",
  projectId: "react-chat-app-lamadev",
  storageBucket: "react-chat-app-lamadev.appspot.com",
  messagingSenderId: "848710302563",
  appId: "1:848710302563:web:d57053ebb8947dfdc2f156",
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: "chat-ab746.firebaseapp.com",
  // projectId: "chat-ab746",
  // storageBucket: "chat-ab746.appspot.com",
  // messagingSenderId: "901216368405",
  // appId: "1:901216368405:web:8ec942ee51611df5c49b1c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
