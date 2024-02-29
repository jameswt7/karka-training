// script.js

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // For simplicity, you can hardcode username/password here or retrieve from an array/object
    if (username === 'user1' && password === 'password1') {
        localStorage.setItem('currentUser', username);
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.chat-container').style.display = 'block';
        document.getElementById('message').textContent = '';
    } else {
        document.getElementById('message').textContent = 'Invalid credentials';
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    document.querySelector('.login-container').style.display = 'block';
    document.querySelector('.chat-container').style.display = 'none';
}

function sendMessage() {
    const message = document.getElementById('messageInput').value;
    const currentUser = localStorage.getItem('currentUser');
    if (message !== '') {
        appendMessage(currentUser, message);
        document.getElementById('messageInput').value = ''; // Clear the input field
    }
}

function appendMessage(username, message) {
    const chatElement = document.getElementById('chat');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${username}: ${message}`;
    chatElement.appendChild(messageElement);
    // Scroll to the bottom of the chat box
    chatElement.scrollTop = chatElement.scrollHeight;
}

// Check if user is already logged in
document.addEventListener('DOMContentLoaded', function() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.chat-container').style.display = 'block';
        document.getElementById('message').textContent = '';
    }
});
