// عناصر
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirm");
const toggleBtn = document.querySelector(".toggle-btn");
const progressBar = document.querySelector(".progress-bar");

const nameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");

// Checklist items
const checklistItems = document.querySelectorAll(".checklist li");

// Toggle password visibility
toggleBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.setAttribute("aria-label", "Password is visible");
  } else {
    passwordInput.type = "password";
    toggleBtn.setAttribute("aria-label", "Password is hidden");
  }
});

// Validation function
function validateForm() {
  let progress = 0;

  // Name
  if (nameInput.value.trim().length > 2) {
    progress += 25;
  }

  // Email
  if (emailInput.value.includes("@")) {
    progress += 25;
  }

  // Password rules
  const password = passwordInput.value;

  const hasLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  // Update checklist UI
  checklistItems[0].style.color = hasLength ? "green" : "black";
  checklistItems[1].style.color = hasUpper ? "green" : "black";
  checklistItems[2].style.color = hasNumber ? "green" : "black";

  if (hasLength && hasUpper && hasNumber) {
    progress += 25;
  }

  // Confirm password
  if (password && password === confirmInput.value) {
    progress += 25;
  }

  // Update progress bar
  progressBar.style.width = progress + "%";
}

// Run validation on input
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", validateForm);
});
