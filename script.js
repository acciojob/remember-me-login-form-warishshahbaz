document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  const rememberMeCheckbox = document.getElementById("rememberMe");
  const existingBtn = document.getElementById("existingBtn");

  // Check if there are saved details in local storage
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");
  
  if (savedUsername && savedPassword) {
    // Show the "Login as existing user" button
    existingBtn.style.display = "inline";
  }

  // Handle form submission
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if "Remember me" checkbox is checked
    if (rememberMeCheckbox.checked) {
      // Save username and password to local storage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      // Clear saved username and password from local storage
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    // Display "Logged in as" alert
    alert("Logged in as " + username);
  });

  // Handle click on "Login as existing user" button
  existingBtn.addEventListener("click", function() {
    const savedUsername = localStorage.getItem("username");
    alert("Logged in as " + savedUsername);
  });
});
