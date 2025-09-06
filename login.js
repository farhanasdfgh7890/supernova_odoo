// src/login.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login-container form");

  if (!loginForm) {
    console.error("❌ Login form not found!");
    return;
  }

  const emailInput = loginForm.querySelector('input[type="email"]');
  const passwordInput = loginForm.querySelector('input[type="password"]');

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("🔑 Login form submitted!");

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("✅ Login successful!");
      window.location.href = "dashboard.html"; // redirect
    } catch (error) {
      console.error("❌ Login failed:", error.message);
      alert(`Login failed: ${error.message}`);
    }
  });
});
