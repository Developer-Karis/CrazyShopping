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
 * 
 */
function buttonSignUp() {

}