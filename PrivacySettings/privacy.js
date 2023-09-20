document.addEventListener('DOMContentLoaded', function () {
    // Function to handle requesting erasure of personal data
    function requestErasure() {
        // Perform your logic to request erasure of personal data here
        // For demonstration, we'll display an alert
        alert('Request for erasure of personal data has been sent.');
    }

    // Function to handle deleting the account
    function deleteAccount() {
        // Perform your logic to delete the account here
        // For demonstration, we'll display a confirmation prompt
        const confirmDelete = confirm('Are you sure you want to delete your account? This action cannot be undone.');
        if (confirmDelete) {
            // Account deletion confirmed, you can proceed with deletion logic here
            alert('Your account has been deleted.');
        }
    }

    // Function to handle saving privacy settings (reusing the previous code)
    function savePrivacySettings() {
        // Retrieve the state of checkboxes for details sharing
        // (Code for retrieving checkboxes as in the previous answer)
        // ...
        // Perform your save logic here (replacing the alert) as needed
        alert('Changes saved successfully!');
    }

    // Attach the respective functions to their corresponding buttons
    const requestErasureButton = document.querySelector('.red-button');
    requestErasureButton.addEventListener('click', requestErasure);

    const deleteAccountButton = document.querySelector('.delete-account-button');
    deleteAccountButton.addEventListener('click', deleteAccount);

    const saveButton = document.querySelector('.green-button');
    saveButton.addEventListener('click', savePrivacySettings);
});


