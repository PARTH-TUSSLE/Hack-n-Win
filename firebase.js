// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

//  Replace this with your actual Firebase config
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

//  Export Firestore & Auth
export { app, db, auth, collection, addDoc, getDocs };

// const firebaseConfig = {
//   apiKey: "AIzaSyAgSyzIt6tOe8t8RMiKhW8GvQhXWGVyncc",
//   authDomain: "noxis-ai.firebaseapp.com",
//   projectId: "noxis-ai",
//   storageBucket: "noxis-ai.firebasestorage.app",
//   messagingSenderId: "1055784312150",
//   appId: "1:1055784312150:web:dc293d99e8a30a3bb38af7",
// };
