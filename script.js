// Check if this is sign-in page
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const loginMessage = document.getElementById("loginMessage");

    const users = JSON.parse(localStorage.getItem("users") || "{}");

    if (users[email] && users[email] === password) {
      loginMessage.style.color = "green";
      loginMessage.textContent = "Login successful!";
      // Redirect if needed
    } else {
      loginMessage.style.color = "red";
      loginMessage.textContent = "Invalid email or password.";
    }
  });
}

// Check if this is sign-up page
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const signupMessage = document.getElementById("signupMessage");

    if (!email || !password) {
      signupMessage.textContent = "Please fill in all fields.";
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "{}");

    if (users[email]) {
      signupMessage.textContent = "User already exists.";
    } else {
      users[email] = password;
      localStorage.setItem("users", JSON.stringify(users));
      signupMessage.style.color = "green";
      signupMessage.textContent = "Sign up successful! Redirecting...";

      setTimeout(() => {
        window.location.href = "sign-in.html";
      }, 1500);
    }
  });
}
