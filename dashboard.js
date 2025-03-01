import {
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
  onAuthStateChanged,
} from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js"; // ✅ Import signOut

// Check if User is Logged In
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById(
      "user-email"
    ).textContent = `Logged in as: ${user.email}`;
    loadDreams(user.uid);
  } else {
    alert("You are not logged in!");
    window.location.href = "login.html";
  }
});

// ✅ Handle Logout
document.getElementById("logout-btn").addEventListener("click", async () => {
  try {
    await signOut(auth);
    alert("Logged out successfully!");
    window.location.href = "index.html"; // ✅ Redirect to landing page
  } catch (error) {
    console.error("Error logging out:", error);
    alert("Failed to log out. Please try again.");
  }
});

// Load User's Dreams from Firestore
async function loadDreams(userId) {
  const dreamList = document.getElementById("dream-list");
  if (!dreamList) return;
  dreamList.innerHTML = "";

  const q = query(
    collection(db, "Dreams"),
    where("userId", "==", userId),
    orderBy("timestamp", "desc")
  );
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((docSnap) => {
    const dream = docSnap.data();
    const dreamId = docSnap.id;

    const li = document.createElement("li");
    li.innerHTML = `
            <span>${dream.text} (Logged on: ${new Date(
      dream.timestamp.toDate()
    ).toLocaleString()})</span>
            <button onclick="editDream('${dreamId}', '${
      dream.text
    }')">✏️ Edit</button>
            <button onclick="deleteDream('${dreamId}')">🗑️ Delete</button>
        `;
    dreamList.appendChild(li);
  });
}

// Ensure dreams load when navigating to Journal & History section
document
  .querySelector("a[data-section='journal-history']")
  .addEventListener("click", () => {
    const user = auth.currentUser;
    if (user) {
      loadDreams(user.uid);
    }
  });

// Edit Dream
window.editDream = async function (dreamId, oldText) {
  const newText = prompt("Edit your dream:", oldText);
  if (!newText) return;

  try {
    await updateDoc(doc(db, "Dreams", dreamId), { text: newText });
    alert("Dream updated successfully!");
    loadDreams(auth.currentUser.uid);
  } catch (error) {
    console.error("Error updating dream:", error);
  }
};

// Delete Dream
window.deleteDream = async function (dreamId) {
  if (!confirm("Are you sure you want to delete this dream?")) return;

  try {
    await deleteDoc(doc(db, "Dreams", dreamId));
    alert("Dream deleted successfully!");
    loadDreams(auth.currentUser.uid);
  } catch (error) {
    console.error("Error deleting dream:", error);
  }
};

// Save Dream to Firestore
async function saveDream(userId, dreamText) {
  try {
    await addDoc(collection(db, "Dreams"), {
      userId: userId,
      text: dreamText,
      timestamp: new Date(),
    });

    alert("Dream saved successfully!");
    document.getElementById("dream-text").value = "";
    loadDreams(userId);
  } catch (error) {
    console.error("Error saving dream:", error);
  }
}

// Handle Dream Submission
document.getElementById("submit-dream").addEventListener("click", () => {
  const dreamText = document.getElementById("dream-text").value.trim();
  if (!dreamText) {
    alert("Please enter a dream description.");
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

// Sidebar Navigation - Handle Section Switching
document.querySelectorAll(".sidebar ul li a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute("data-section");

    document.querySelectorAll(".section").forEach((section) => {
      section.style.display = "none";
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.style.display = "block";
    }

    document.querySelector(".default-view").style.display = "none";
  });
});


