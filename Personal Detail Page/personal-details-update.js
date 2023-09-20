// personal-details-update.js

document.addEventListener('DOMContentLoaded', function () {
    const personalDetailsForm = document.getElementById('personal-details-form');
    const saveButton = document.getElementById('save-button');

    saveButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve form input values
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const username = document.getElementById('username').value;
        const address = document.getElementById('address').value;
        const stateProvince = document.getElementById('state-province').value;
        const country = document.getElementById('country').value;

        // Perform your update personal details logic here (replace this with actual logic)
        // For demonstration, we'll display an alert with the form data
        const message = `
            First Name: ${firstName}
            Last Name: ${lastName}
            Username: ${username}
            Address: ${address}
            State/Province: ${stateProvince}
            Country: ${country}
        `;
        alert('Personal details updated successfully!\n\n' + message);
    });
});

