//  Import Firebase Modules Properly
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase Configuration (Replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyAgSyzIt6tOe8t8RMiKhW8GvQhXWGVyncc",
  authDomain: "noxis-ai.firebaseapp.com",
  projectId: "noxis-ai",
  storageBucket: "noxis-ai.firebasestorage.app",
  messagingSenderId: "1055784312150",
  appId: "1:1055784312150:web:dc293d99e8a30a3bb38af7",
};


//  Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

//  Export Firebase Services for Use in Other Files
export {
  app,
  db,
  auth,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAgSyzIt6tOe8t8RMiKhW8GvQhXWGVyncc",
//   authDomain: "noxis-ai.firebaseapp.com",
//   projectId: "noxis-ai",
//   storageBucket: "noxis-ai.firebasestorage.app",
//   messagingSenderId: "1055784312150",
//   appId: "1:1055784312150:web:dc293d99e8a30a3bb38af7",
// };
