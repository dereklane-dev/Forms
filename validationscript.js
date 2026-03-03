    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value
let form = document.getElementById("myForm");
let inputField = document.getElementById('inputField');

      // Regular expression pattern for alphanumeric input
let regex = /^[a-zA-Z0-9]+$/;

inputField.addEventListener("input", function () {
    inputField.setCustomValidity("");
});

      // Check if the input value matches the pattern
form.addEventListener('submit', function(event) {

    let value = inputField.value;

        // Invalid input: display error message
    if (!regex.test(value)) {
        event.preventDefault();
        inputField.setCustomValidity("Error: Input must be alphanumeric only.");
        inputField.reportValidity();

        // Valid input: display confirmation and submit the form
    } else {
        inputField.setCustomValidity("");
        event.preventDefault();
        alert("Form submitted successfully!")
    }
});

// I am getting the hang of Javescript!!! -Derek Lane