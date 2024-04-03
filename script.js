document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const rememberMeCheckbox = document.getElementById('rememberMe');

  // Load saved details from local storage
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');
  if (savedUsername && savedPassword) {
    usernameInput.value = savedUsername;
    passwordInput.value = savedPassword;
    rememberMeCheckbox.checked = true;
  }

  // Form submission handler
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (rememberMeCheckbox.checked) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    alert('Logged in as ' + username);
  });

  // Existing user login button
  const existingButton = document.createElement('button');
  existingButton.id = 'existing';
  existingButton.textContent = 'Login as existing user';
  existingButton.addEventListener('click', function() {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      alert('Logged in as ' + savedUsername);
    } else {
      alert('No existing user details found.');
    }
  });
  document.body.appendChild(existingButton);
});