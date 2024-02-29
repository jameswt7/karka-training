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

document.addEventListener('DOMContentLoaded', function () {
    const chatBox = document.getElementById('chatBox');
    const imageInput = document.getElementById('imageInput');
    const messageInput = document.getElementById('messageInput');
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const sendImageButton = document.getElementById('sendImageButton');
    const clearChatBtn = document.getElementById('clearChatBtn');
    const emojiPickerBtn = document.getElementById('emojiPickerBtn');

    // Emoji options
    const emojis = ['😀', '😂', '😍', '😎', '😊', '🎉', '❤️', '👍', '👋', '🌟'];

    // Create emoji picker dropdown menu
    const emojiPickerMenu = document.createElement('div');
    emojiPickerMenu.classList.add('emoji-picker-menu');
    emojis.forEach(emoji => {
        const emojiOption = document.createElement('button');
        emojiOption.textContent = emoji;
        emojiOption.addEventListener('click', function () {
            messageInput.value += emoji; // Append selected emoji to the input field
        });
        emojiPickerMenu.appendChild(emojiOption);
    });
    emojiPickerBtn.parentNode.insertBefore(emojiPickerMenu, emojiPickerBtn.nextSibling);

    emojiPickerBtn.addEventListener('click', function () {
        emojiPickerMenu.classList.toggle('show');
    });


    sendMessageBtn.addEventListener('click', function () {
        // const message = prompt('Enter your message:');
        const message = messageInput.value.trim();
        if (message !== null && message.trim() !== '') {
            appendMessage(message);
            messageInput.value = ''; // Clear the input field
        }
    });

    sendImageButton.addEventListener('click', function () {
        imageInput.click(); // Click the hidden file input
    });

    imageInput.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imageUrl = e.target.result;
                appendImage(imageUrl);
            };
            reader.readAsDataURL(file);
        }
    });

    clearChatBtn.addEventListener('click', function () {
        chatBox.innerHTML = ''; // Clear the chat box content
    });

    // Add event listener to the chat box to handle double-click on images
    chatBox.addEventListener('dblclick', function (event) {
        if (event.target.tagName === 'IMG') {
            const imageUrl = event.target.src;
            openImagePopup(imageUrl);
        }
    });

    function appendMessage(message) {
        const timestamp = new Date().toLocaleTimeString(); // Get current time
        const messageElement = document.createElement('div');
        messageElement.textContent = `[${timestamp}] ${message}`; // Append timestamp to message
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

    function openImagePopup(imageUrl) {
        const popupWindow = window.open('', 'ImagePopup', 'width=600,height=400');
        popupWindow.document.write(`<img src="${imageUrl}" style="max-width: 100%; max-height: 100%;">`);
    }

    // Event listener to handle "Enter" key press in the message input field
    messageInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = messageInput.value.trim();
        if (message !== '') {
            appendMessage(message);
            messageInput.value = ''; // Clear the input field
        }
    }
// Save user's name in local storage when logging in
localStorage.setItem('userName', 'John');

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
