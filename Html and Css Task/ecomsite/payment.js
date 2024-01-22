// You can add payment-related logic here if needed
document.addEventListener('DOMContentLoaded', function () {
    const paymentButton = document.getElementById('payment-button');
    paymentButton.addEventListener('click', processPayment);
});

function processPayment() {
    // Dummy logic for simulating a successful payment
    alert('Payment successful! Thank you for your purchase.');
}
