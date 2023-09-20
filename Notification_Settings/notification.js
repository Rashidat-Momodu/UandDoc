document.addEventListener('DOMContentLoaded', function () {
    // Function to save notification settings
    function saveNotificationSettings(event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve checkbox values
        const emailNotification = document.getElementById('email-notification').checked;
        const phoneNotification = document.getElementById('phone-notification').checked;
        const consultationConfirmation = document.getElementById('consultation-confirmation').checked;
        const consultationReminders = document.getElementById('consultation-reminders').checked;
        const medicationReminders = document.getElementById('medication-reminders').checked;
        const medicationRefillReminders = document.getElementById('medication-refill-reminders').checked;
        const udocNewslettersUpdates = document.getElementById('udoc-newsletters-updates').checked;

        // Perform your save logic here (replace this with actual logic)
        // For demonstration, we'll display an alert with the selected options
        const message = `
            Email Notification: ${emailNotification}
            Phone Notification: ${phoneNotification}
            Consultation Booking Confirmations: ${consultationConfirmation}
            Consultation Reminders: ${consultationReminders}
            Medication Reminders: ${medicationReminders}
            Medication Refill Reminders: ${medicationRefillReminders}
            U&Doc Newsletters and Updates: ${udocNewslettersUpdates}
        `;
        alert('Notification settings saved successfully!\n\n' + message);
    }

    // Attach the saveNotificationSettings function to the form submission
    const notificationForm = document.querySelector('form');
    notificationForm.addEventListener('submit', saveNotificationSettings);
});