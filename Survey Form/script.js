function submitForm() {
    // Get form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(checkbox => checkbox.value);
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    // Check if all fields are filled
    if (firstName && lastName && dob && country && gender.length > 0 && profession && email && mobile) {
        // Display a popup with the submitted data
        alert("Survey submitted\n\nFirst Name: " + firstName +
              "\nLast Name: " + lastName +
              "\nDate of Birth: " + dob +
              "\nCountry: " + country +
              "\nGender: " + gender.join(", ") +
              "\nProfession: " + profession +
              "\nEmail: " + email +
              "\nMobile Number: " + mobile);

        // Reset the form
        resetForm();
    } else {
        alert("Please fill in all the required fields.");
    }
    
    return false; // Prevent form submission
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}