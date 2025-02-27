document.getElementById("tryMeBtn").addEventListener("click", function() {
    alert("Button clicked!");
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;

    let username = document.getElementById("loginUsername").value.trim();
    let password = document.getElementById("loginPassword").value;

    if (username === "") {
        document.getElementById("loginUsernameError").textContent = "Username required";
        valid = false;
    } else {
        document.getElementById("loginUsernameError").textContent = "";
    }

    if (password.length < 8 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || 
        !/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
        document.getElementById("loginPasswordError").textContent = "Invalid password!";
        valid = false;
    } else {
        document.getElementById("loginPasswordError").textContent = "";
    }

    if (valid) alert("Login Successful");
});

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let languages = document.querySelectorAll('input[name="language"]:checked');

    if (firstName === "") {
        document.getElementById("firstNameError").textContent = "First name required";
        valid = false;
    } else {
        document.getElementById("firstNameError").textContent = "";
    }

    if (lastName === "") {
        document.getElementById("lastNameError").textContent = "Last name required";
        valid = false;
    } else {
        document.getElementById("lastNameError").textContent = "";
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email";
        valid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (!dob) {
        document.getElementById("dobError").textContent = "Date of birth required";
        valid = false;
    } else {
        document.getElementById("dobError").textContent = "";
    }

    if (!gender) {
        document.getElementById("genderError").textContent = "Select a gender";
        valid = false;
    } else {
        document.getElementById("genderError").textContent = "";
    }

    if (languages.length === 0) {
        document.getElementById("languageError").textContent = "Select at least one language";
        valid = false;
    } else {
        document.getElementById("languageError").textContent = "";
    }

    if (valid) alert("Registration Successful");
});
