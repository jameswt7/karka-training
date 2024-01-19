function validateLogin() {
    // Get entered username and password
    var enteredUsername = document.getElementById('username').value;
    var enteredPassword = document.getElementById('password').value;

    // Hardcoded username and password for validation
    var validUsername = 'user';
    var validPassword = 'password';

    // Check if entered username and password are valid
    if (enteredUsername === validUsername && enteredPassword === validPassword) {
        // Successful login, you can redirect to another page or perform other actions
        alert('Login successful!');
        window.location.href = 'home.html';
        return true; // Allow form submission
    } else {
        // Invalid login, show error message
        document.getElementById('error-message').textContent = 'Invalid username or password';
        return false; // Prevent form submission
    }
}

function logout() {
    window.location.href = 'index.html';
}
// Function to get or initialize the visitor count
function getVisitorCount() {
    var visitorCount = localStorage.getItem('visitorCount');
    return visitorCount ? parseInt(visitorCount) : 0;
}

// Function to update and display the visitor count
function updateVisitorCount() {
    var totalVisitors = getVisitorCount() + 1;
    var uniqueVisitors = localStorage.getItem('uniqueVisitors') || [];

    if (!uniqueVisitors.includes(navigator.userAgent)) {
        uniqueVisitors.push(navigator.userAgent);
        localStorage.setItem('uniqueVisitors', JSON.stringify(uniqueVisitors));
    }

    var message = "Total Visitors: " + totalVisitors + "<br>Unique Visitors: " + uniqueVisitors.length;

    document.getElementById('visitorCount').innerHTML = message;
    localStorage.setItem('visitorCount', totalVisitors);
}

// Call the function on page load
window.onload = updateVisitorCount;