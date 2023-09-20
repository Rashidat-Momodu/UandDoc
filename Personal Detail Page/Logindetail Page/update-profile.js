// update-profile.js

document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('new-email');
    const oldEmailInput = document.getElementById('email-address');
    const verifyPasswordInput = document.getElementById('verify-password');
    const newPasswordInput = document.getElementById('new-password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const saveButton = document.getElementById('save-button');
    const profileForm = document.getElementById('profile-form');

    // Function to validate if the new email and old email match
    function validateEmail() {
        const newEmail = emailInput.value;
        const oldEmail = oldEmailInput.value;

        if (newEmail === oldEmail) {
            return true;
        } else {
            alert('New email and old email do not match. Please try again.');
            return false;
        }
    }

    // Function to validate if the new password and confirm password match
    function validatePassword() {
        const newPassword = newPasswordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (newPassword === confirmPassword) {
            return true;
        } else {
            alert('New password and confirm password do not match. Please try again.');
            return false;
        }
    }

    // Add a form submit event listener
    profileForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate email and password
        if (validateEmail() && validatePassword()) {
            // Perform your update profile logic here (replace this with actual logic)
            // For demonstration, we'll display an alert
            alert('Profile updated successfully!');

            // Clear the input fields
            emailInput.value = '';
            oldEmailInput.value = '';
            verifyPasswordInput.value = '';
            newPasswordInput.value = '';
            confirmPasswordInput.value = '';
        }
    });
});
