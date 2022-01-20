// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO9LQfHyX7njGxccbJgyWtYSIaZtlJWSs",
  authDomain: "instagram-clone-2332a.firebaseapp.com",
  projectId: "instagram-clone-2332a",
  storageBucket: "instagram-clone-2332a.appspot.com",
  messagingSenderId: "984696297691",
  appId: "1:984696297691:web:eb735e4f03e0057653d4fe"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }