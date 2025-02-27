// By default, the dropdown works with hover
// Uncomment this code if you want click functionality instead


document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    // Toggle dropdown on button click
    dropdownButton.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownContent.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        if (dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    });
});

import { db, collection, addDoc } from "./firebase.js";

//  Function to test Firestore (Adds a test document to Firestore)
async function testFirestore() {
  try {
    const docRef = await addDoc(collection(db, "TestCollection"), {
      message: "Firebase is working!",
      timestamp: new Date(),
    });
    console.log(
      "Firebase Test Success! Document written with ID:",
      docRef.id
    );
  } catch (error) {
    console.error(" Firebase Error:", error);
  }
}

// Run the test function
testFirestore();
