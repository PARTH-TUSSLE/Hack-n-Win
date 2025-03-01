import { db, collection, addDoc, getAuth } from "./firebase.js";

const auth = getAuth();
const dreamInput = document.getElementById("dream-text");
const submitDreamBtn = document.getElementById("submit-dream");

//  Save Dream to Firestore
async function saveDream(userId, dreamText) {
  try {
    await addDoc(collection(db, "Dreams"), {
      userId: userId,
      text: dreamText,
      timestamp: new Date(),
    });

    alert("Dream saved!");
    dreamInput.value = "";
  } catch (error) {
    console.error("Error saving dream:", error);
  }
}

//  Handle Dream Submission
submitDreamBtn.addEventListener("click", () => {
  const dreamText = dreamInput.value.trim();

  if (!dreamText) {
    alert("Please enter a dream.");
    return;
  }

  const user = auth.currentUser;
  if (!user) {
    alert("No user logged in. Redirecting to login...");
    window.location.href = "login.html";
    return;
  }

  saveDream(user.uid, dreamText);
});
