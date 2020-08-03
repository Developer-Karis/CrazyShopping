"use strict";

/**
 * Message Warning for user when he don't enter username and password
 */
function buttonLogIn() {
    // Input Field
    let inputUsername = document.getElementById("login-username-field");
    let inputPassword = document.getElementById("login-password-field");

    if (inputUsername.value.length == 0 && inputPassword.value.length == 0) {
        inputUsername.style.borderColor = "orange";
        inputPassword.style.borderColor = "orange";
    }
}

/**
 * Check if all input field are correct.
 */
function buttonSignUp() {
    let inputPasswordSignUp = document.getElementById("login-password-field");
    let inputConfirmPasswordSignUp = document.getElementById("login-confirmPassword-field");
    let messageError = document.getElementById("messageErrorPassword");

    if (inputPasswordSignUp !== inputConfirmPasswordSignUp) {
        messageError.innerHTML = "The password must be the same !";
        messageError.style.color = "#007bff";
        messageError.style.fontSize = "18px";
        inputPasswordSignUp.style.borderColor = "orange";
        inputConfirmPasswordSignUp.style.borderColor = "orange";
    }
}