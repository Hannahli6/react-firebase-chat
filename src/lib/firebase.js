import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "pixel-chat-room-b94ba.firebaseapp.com",
  projectId: "pixel-chat-room-b94ba",
  storageBucket: "pixel-chat-room-b94ba.firebasestorage.app",
  messagingSenderId: "1091449833297",
  appId: "1:1091449833297:web:b932bf69ab33ceb2b83570",
  measurementId: "G-TYF6HMJDB1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(); //login/register user 
export const db = getFirestore(); //create user information
export const storage = getStorage(); //upload images

