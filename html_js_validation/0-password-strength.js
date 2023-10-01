// password-validation.js

// Function to validate the password
function validatePassword() {
    // Retrieve the password input field value
    const password = document.getElementById('password').value;

    // Define regular expressions for each criteria
    const minLengthRegex = /.{8,}/;         // At least 8 characters long
    const uppercaseRegex = /[A-Z]/;        // At least one uppercase letter
    const lowercaseRegex = /[a-z]/;        // At least one lowercase letter
    const numericRegex = /\d/;              // At least one numeric digit
    const specialCharacterRegex = /[!@#$%^&*]/;  // At least one special character

    // Check each criteria
    const isMinLengthValid = minLengthRegex.test(password);
    const isUppercaseValid = uppercaseRegex.test(password);
    const isLowercaseValid = lowercaseRegex.test(password);
    const isNumericValid = numericRegex.test(password);
    const isSpecialCharacterValid = specialCharacterRegex.test(password);

    // Check if all criteria are met
    if (
        isMinLengthValid &&
        isUppercaseValid &&
        isLowercaseValid &&
        isNumericValid &&
        isSpecialCharacterValid
    ) {
        return true; // Password is valid
    } else {
        return false; // Password is invalid
    }
}

// Handle form submission
document.getElementById('password-form').addEventListener('submit', function (event) {
    if (!validatePassword()) {
        event.preventDefault(); // Prevent form submission if password is invalid
        alert('Password does not meet the criteria.');
    }
});
