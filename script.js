document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const existingBtn = document.getElementById('existing');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const rememberMeCheckbox = document.getElementById('rememberMe');

  // Check if there are saved details in local storage
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');
  if (savedUsername && savedPassword) {
    existingBtn.style.display = 'block';
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    const rememberMe = rememberMeCheckbox.checked;

    if (rememberMe) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    alert(`Logged in as ${username}`);
  }

  // Function to handle existing user login
  function handleExistingUserLogin() {
    const savedUsername = localStorage.getItem('username');
    alert(`Logged in as ${savedUsername}`);
  }

  loginForm.addEventListener('submit', handleSubmit);
  existingBtn.addEventListener('click', handleExistingUserLogin);
});
