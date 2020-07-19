"use strict";

function buttonLogIn() {
    let inputUsername = document.getElementById("username");
    let inputPassword = document.getElementById("password");
    let messageEmpty = document.getElementById("empty");

    if (inputUsername.value.length == 0 && inputPassword.value.length == 0) {
        messageEmpty.innerHTML = "You must enter Username and Password First !";
        messageEmpty.style.color = "red";
    }
}