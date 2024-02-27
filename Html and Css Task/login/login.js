// script.js

// Simulating user authentication
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Function to handle login
function login(event) {
    event.preventDefault();
    const username = document.getElementById('#username').value;
    const password = document.getElementById('#password').value;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        // Redirect to home page
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password');
    }
}

// Function to handle registration
function register(event) {
    event.preventDefault();
    const newUsername = document.getElementById('#newUsername').value;
    const newPassword = document.getElementById('#newPassword').value;
    // Here you can add the new user to your users array or perform any other action
    alert('Registration successful. You can now login.');
    // Redirect to login page
    window.location.href = 'index.html';
}

// Function to handle logout
function logout() {
    // Redirect to login page
    window.location.href = 'loginpage.html';
}

// Event listeners for form submissions
document.getElementById('#loginForm').addEventListener('submit', login);
document.getElementById('#registerForm').addEventListener('submit', register);
