document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chatBox');
    const messageInput = document.getElementById('messageInput');
    const sendMessageBtn = document.getElementById('sendMessageBtn');

    sendMessageBtn.addEventListener('click', function() {
        const message = messageInput.value.trim();
        if (message !== '') {
            const username = generateRandomUsername();
            displayMessage(username + ': ' + message); // Display the typed message
            messageInput.value = '';
            simulateTyping(username); // Simulate typing from another user
        }
    });

    function displayMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function simulateTyping(username) {
        // Simulate delay before sending the message
        setTimeout(function() {
            const responseMessage = generateRandomUsername() + ': Hello! This is ' + generateRandomUsername() + '.';
            displayMessage(responseMessage);
        }, Math.random() * 3000); // Random delay between 0 to 3 seconds
    }

    function generateRandomUsername() {
        const adjectives = ['Happy', 'Sad', 'Excited', 'Confused', 'Lucky', 'Brave'];
        const nouns = ['Cat', 'Dog', 'Bird', 'Elephant', 'Monkey', 'Tiger'];
        const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const noun = nouns[Math.floor(Math.random() * nouns.length)];
        return adjective + noun;
    }
});



// document.addEventListener('DOMContentLoaded', function() {
//     const loginContainer = document.getElementById('loginContainer');
//     const chatBox = document.getElementById('chatBox');
//     const usernameInput = document.getElementById('usernameInput');
//     const loginBtn = document.getElementById('loginBtn');
//     const messagesContainer = document.getElementById('messages');
//     const messageInput = document.getElementById('messageInput');
//     const sendMessageBtn = document.getElementById('sendMessageBtn');
//     const logoutBtn = document.getElementById('logoutBtn');

//     let username = '';

//     loginBtn.addEventListener('click', function() {
//         username = usernameInput.value.trim();
//         if (username !== '') {
//             loginContainer.style.display = 'none';
//             chatBox.style.display = 'block';
//             displayMessage('You have joined the chat as ' + username);
//         }
//     });

//     sendMessageBtn.addEventListener('click', function() {
//         const message = messageInput.value.trim();
//         if (message !== '') {
//             displayMessage(username + ': ' + message);
//             messageInput.value = '';
//         }
//     });

//     logoutBtn.addEventListener('click', function() {
//         username = '';
//         loginContainer.style.display = 'block';
//         chatBox.style.display = 'none';
//     });

//     function displayMessage(message) {
//         const messageElement = document.createElement('div');
//         messageElement.textContent = message;
//         messagesContainer.appendChild(messageElement);
//     }
// });
