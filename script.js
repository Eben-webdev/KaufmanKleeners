// Redirect to sign-in if not logged in
if (window.location.pathname.includes("index.html")) {
  const email = localStorage.getItem("currentUser");
  if (!email) {
    window.location.href = "sign-in.html";
  } else {
    const profileDisplay = document.getElementById("profileDisplay");
    if (profileDisplay) {
      profileDisplay.textContent = `Logged in as: ${email}`;
    }
  }
}

// Logout
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "sign-in.html";
}

// Delete Account
function confirmDelete() {
  const enteredPass = document.getElementById("deletePassword").value.trim();
  const email = localStorage.getItem("currentUser");
  const users = JSON.parse(localStorage.getItem("users") || "{}");
  const msg = document.getElementById("deleteMessage");

  if (users[email] && users[email] === enteredPass) {
    delete users[email];
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.removeItem("currentUser");
    msg.style.color = "green";
    msg.textContent = "Account deleted. Redirecting...";
    setTimeout(() => window.location.href = "sign-up.html", 2000);
  } else {
    msg.style.color = "red";
    msg.textContent = "Incorrect password.";
  }
}
