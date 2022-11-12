// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcDzsoDrYE_4Aad5juRiUIIi_8y12XuBI",
  authDomain: "chat-bccac.firebaseapp.com",
  projectId: "chat-bccac",
  storageBucket: "chat-bccac.appspot.com",
  messagingSenderId: "169825244149",
  appId: "1:169825244149:web:e6984f81f57ead3348c6bc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
