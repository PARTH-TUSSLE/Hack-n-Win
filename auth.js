// Import Firebase Authentication modules
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { app } from "./firebase.js"; // Import Firebase app

//  Initialize Firebase Auth
const auth = getAuth(app);

// Function to Register New Users
export function signUpUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(" Signup Successful:", userCredential.user);
      alert("Signup successful! You can now log in.");
      window.location.href = "login.html"; // Redirect to login after signup
    })
    .catch((error) => {
      console.error(" Signup Error:", error.message);
      alert(error.message);
    });
}

//  Function to Log In Users
export function logInUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(" Login Successful:", userCredential.user);
      alert("Login successful!");
      window.location.href = "dashboard.html"; //  Redirect to dashboard
    })
    .catch((error) => {
      console.error(" Login Error:", error.message);
      alert(error.message);
    });
}

//  Function to Log Out Users
export function logOutUser() {
  signOut(auth)
    .then(() => {
      console.log(" Logout Successful");
      alert("You have been logged out.");
      window.location.href = "index.html"; //  Redirect to homepage after logout
    })
    .catch((error) => {
      console.error(" Logout Error:", error.message);
    });
}
