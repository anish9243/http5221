window.onload = function () {
    "use strict";
    var formHandle = document.forms.login__form;

    formHandle.onsubmit = processForm;

    function processForm() {

        // Get input elements
        var usernameInput = document.querySelector(".login__username");
        var passwordInput = document.querySelector(".login__password");

        // Get values
        var username = usernameInput.value;
        var password = passwordInput.value;

        var isValid = true;
        var outputDiv = document.querySelector(".output");

        passwordInput.classList.remove("login__txtbox_error");
        usernameInput.classList.remove("login__txtbox_error");

        // Check for empty fields

        if (username === "") {
            usernameInput.classList.add("login__txtbox_error");
            usernameInput.focus();
            isValid = false;
        } else if (password === "") {
            passwordInput.classList.add("login__txtbox_error");
            passwordInput.focus();
            isValid = false;

        }
        if (isValid) {
            // Show output div
            outputDiv.style.display = "block";

            // Set output values
            document.querySelector(".output__user").textContent = username;
            document.querySelector(".output__pass").textContent = password;
        }
        return false;
    }
};