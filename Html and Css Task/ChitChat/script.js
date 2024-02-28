// script.js

// Function to handle login
function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(u => u.username === username && u.password === password);
    if (user) {
        // Redirect to home page
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password');
    }
}

// Function to handle registration
function register(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    // Check if the username already exists
    if (storedUsers.some(user => user.username === newUsername)) {
        alert('Username already exists. Please choose a different one.');
        return;
    }
    // Add new user to the array
    storedUsers.push({ username: newUsername, password: newPassword });
    // Save the updated users array to local storage
    localStorage.setItem('users', JSON.stringify(storedUsers));
    alert('Registration successful. You can now login.');
    // Redirect to login page
    window.location.href = 'login.html';
}

// Function to handle logout
function logout() {
    // Redirect to login page
    window.location.href = 'login.html';
}

// Event listeners for form submissions
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', login);
}

const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', register);
}

// script.js

// script.js

document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chatBox');
    const imageInput = document.getElementById('imageInput');
    const messageInput = document.getElementById('messageInput');
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const sendImageButton = document.getElementById('sendImageButton');
    const clearChatBtn = document.getElementById('clearChatBtn');

    sendMessageBtn.addEventListener('click', function() {
        // const message = prompt('Enter your message:');
        const message = messageInput.value.trim();
        if (message !== null && message.trim() !== '') {
            appendMessage(message);
            messageInput.value = ''; // Clear the input field
        }
    });

    sendImageButton.addEventListener('click', function() {
        imageInput.click(); // Click the hidden file input
    });

    imageInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageUrl = e.target.result;
                appendImage(imageUrl);
            };
            reader.readAsDataURL(file);
        }
    });

    clearChatBtn.addEventListener('click', function() {
        chatBox.innerHTML = ''; // Clear the chat box content
    });

    function appendMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.classList.add('message');
        // chatBox.prepend(messageElement); // Append message to the top
        chatBox.appendChild(messageElement); // Append message to the bottom
        scrollToBottom();
    }

    function appendImage(imageUrl) {
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.classList.add('image');
        
        chatBox.appendChild(imageElement); // Append image to the bottom
        scrollToBottom();
    }

    function scrollToBottom() {
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});



// script.js

// document.addEventListener('DOMContentLoaded', function() {
//     const chatBox = document.getElementById('chatBox');
//     const imageInput = document.getElementById('imageInput');
//     const messageInput = document.getElementById('messageInput');
//     const sendMessageBtn = document.getElementById('sendMessageBtn');
//     const sendImageButton = document.getElementById('sendImageButton');
//     const clearChatBtn = document.getElementById('clearChatBtn');

//     sendMessageBtn.addEventListener('click', function() {
//         // const message = prompt('Enter your message:');
//         const message = messageInput.value.trim();
//         if (message !== null && message.trim() !== '') {
//             appendMessage(message);
//             messageInput.value = ''; // Clear the input field
//         }
//     });

//     sendImageButton.addEventListener('click', function() {
//         imageInput.click(); // Click the hidden file input
//     });

//     imageInput.addEventListener('change', function() {
//         const file = this.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const imageUrl = e.target.result;
//                 appendImage(imageUrl);
//             };
//             reader.readAsDataURL(file);
//         }
//     });

//     clearChatBtn.addEventListener('click', function() {
//         chatBox.innerHTML = ''; // Clear the chat box content
//     });

//     function appendMessage(message) {
//         const messageElement = document.createElement('div');
//         messageElement.textContent = message;
//         messageElement.classList.add('message');
//         chatBox.appendChild(messageElement);
//         // Scroll to the bottom of the chat box
//         chatBox.scrollTop = chatBox.scrollHeight;
//         chatBox.prepend(messageElement); // Append message to the top
//     }

//     function appendImage(imageUrl) {
//         const imageElement = document.createElement('img');
//         imageElement.src = imageUrl;
//         imageElement.classList.add('image');
//         chatBox.appendChild(imageElement);
//         // Scroll to the bottom of the chat box
//         chatBox.scrollTop = chatBox.scrollHeight;
//         chatBox.prepend(imageElement); // Append image to the top
//     }
// });
