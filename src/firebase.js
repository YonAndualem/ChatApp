import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvgI3VeREt1lLHaGUA6_ukq8i9yGtZds8",
  authDomain: "chatapp-3b1fa.firebaseapp.com",
  projectId: "chatapp-3b1fa",
  storageBucket: "chatapp-3b1fa.appspot.com",
  messagingSenderId: "253701360881",
  appId: "1:253701360881:web:a331420406bd996fbc6d50"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
