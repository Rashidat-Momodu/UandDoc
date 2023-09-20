// account-settings.js

document.addEventListener('DOMContentLoaded', function () {
    // Define variables for elements you want to interact with
    const personalDetailsButton = document.querySelector('.button:nth-child(1)');
    const loginDetailsButton = document.querySelector('.button:nth-child(2)');
    const notificationSettingsButton = document.querySelector('.button:nth-child(3)');
    const paymentSettingsButton = document.querySelector('.button:nth-child(4)');
    const privacySettingsButton = document.querySelector('.button:nth-child(5)');

    // Define functions to handle button clicks
    function handlePersonalDetailsClick() {
        // Add logic to handle personal details
        alert('Personal Details Clicked!'); // Replace with your logic
    }

    function handleLoginDetailsClick() {
        // Add logic to handle login details
        alert('Login Details Clicked!'); // Replace with your logic
    }

    function handleNotificationSettingsClick() {
        // Add logic to handle notification settings
        alert('Notification Settings Clicked!'); // Replace with your logic
    }

    function handlePaymentSettingsClick() {
        // Add logic to handle payment settings
        alert('Payment Settings Clicked!'); // Replace with your logic
    }

    function handlePrivacySettingsClick() {
        // Add logic to handle privacy settings
        alert('Privacy Settings Clicked!'); // Replace with your logic
    }

    // Add click event listeners to the buttons
    personalDetailsButton.addEventListener('click', handlePersonalDetailsClick);
    loginDetailsButton.addEventListener('click', handleLoginDetailsClick);
    notificationSettingsButton.addEventListener('click', handleNotificationSettingsClick);
    paymentSettingsButton.addEventListener('click', handlePaymentSettingsClick);
    privacySettingsButton.addEventListener('click', handlePrivacySettingsClick);
});
