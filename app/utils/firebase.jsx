import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_XaxKUiLYiObOn1J-d55KHhAeYJRR-Kc",
  authDomain: "ecommerce-6e502.firebaseapp.com",
  projectId: "ecommerce-6e502",
  storageBucket: "ecommerce-6e502.appspot.com",
  messagingSenderId: "263283370113",
  appId: "1:263283370113:web:54bceaaec9b18602498580"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);