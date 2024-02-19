//your JS code here. If required.

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const rememberCheckbox = document.getElementById('checkbox');
  const submitButton = document.getElementById('submit');
  const existingButton = document.getElementById('existing');

  // Check if there are saved details
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');
  if (savedUsername && savedPassword) {
    existingButton.style.display = 'block';
  }

  // Event listener for form submission
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (rememberCheckbox.checked) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    alert(`Logged in as ${username}`);
  });

  // Event listener for existing user login
  existingButton.addEventListener('click', function() {
    const username = localStorage.getItem('username');
    alert(`Logged in as ${username}`);
  });
});
