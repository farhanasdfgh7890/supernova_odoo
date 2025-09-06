// src/signup.js
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.querySelector('.signup-container form'); 

  if (!signupForm) {
    console.error("Signup form not found. Check your HTML structure and selectors.");
    return;
  }

  const emailInput = signupForm.querySelector('input[type="email"]');
  const passwordInput = signupForm.querySelector('input[type="password"]');
  const messageBox = document.querySelector('.signup-message'); // optional

  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      showMessage("⚠️ Please fill in all fields.", "red");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      showMessage("✅ Signed up successfully! Redirecting...", "green");

      // redirect after a short delay
      setTimeout(() => {
        window.location.assign("dashboard.html");
      }, 1200);

    } catch (error) {
      console.error("Error signing up:", error.message);
      showMessage(`❌ Signup failed: ${error.message}`, "red");
    }
  });

  // helper function for messages
  function showMessage(text, color = "black") {
    if (messageBox) {
      messageBox.textContent = text;
      messageBox.style.color = color;
    } else {
      alert(text); // fallback if no message container exists
    }
  }
});
