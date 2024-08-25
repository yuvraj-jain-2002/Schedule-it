// This code is for Proposal 4 in Unit 6: Validating the Form on the Profile Page

$(document).ready(function() {

    // Event listener when the form is submitted
    $('form').on('submit', function(event) {
        event.preventDefault();

        // Calls function to validate the form
        validateForm();
    });
});

// Function to validate the form fields
function validateForm() {
    let isValid = true;
    let errorMessage = "Please fix the following errors:\n"; // Since there might be multiple validation errors

    // Code to validate the name
    const name = $('#name').val();

    // Regular expression to allow only alphabets and spaces
    const nameRegex = /^[a-zA-Z ]*$/;

    // Checks if the name field is empty or contains numbers and special characters 
    if (name === "" || !nameRegex.test(name)) {
        isValid = false;
        errorMessage += "- Name must not be empty and contain no numbers and special characters.\n";
    }

    // Code to validate the email
    const email = $('#email').val();

    // Regular expression to allow for correct email address format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Checks if the email field is empty or in incorrect format 
    if (email === "" || !emailRegex.test(email)) {
        isValid = false;
        errorMessage += "- Please enter a valid email address.\n";
    }

    // Code to Validate the About me section
    const aboutMe = $('#about-me').val();

    // Checks if the about me inout field is empty
    if (aboutMe === "") {
        isValid = false;
        errorMessage += "- 'About me' section must not be empty.\n";
    }

    // If the form is valid, then alert the user that the form is submitted/validated
    if (isValid) {
        alert("Information successfully updated!");
    } else {
        alert(errorMessage); // Otherwise, error message
    }
}
