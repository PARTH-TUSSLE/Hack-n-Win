import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "./firebase.js";

// ✅ Function to Log In User
export function logInUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("✅ Login Successful:", userCredential.user);
      alert("Login successful!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error("❌ Login Error:", error.message);
      alert(error.message);
    });
}

// ✅ Function to Sign Up User
export function signUpUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("✅ Signup Successful:", userCredential.user);
      alert("Signup successful!");
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error("❌ Signup Error:", error.message);
      alert(error.message);
    });
}

// ✅ Function to Log Out User
export function logOutUser() {
  signOut(auth)
    .then(() => {
      console.log("✅ Logout Successful");
      alert("Logged out successfully!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("❌ Logout Error:", error.message);
      alert(error.message);
    });
}
