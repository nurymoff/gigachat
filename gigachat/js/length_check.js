/*
Script that calculates the amount of characters left for name input and message textarea,
displaying the number and changing it's color depending on the amount.
Original source of the script: Allan Nurymov
*/

var message = document.getElementById('message');
var username = document.getElementById('username');

window.onload = messageLengthCheck();
window.onload = nameLengthCheck();

function messageLengthCheck() {
    var message_length = message.value.length;
    var characters_left_message = 512 - message_length;
    var count_message = document.getElementById("chars_left_message");
    count_message.innerHTML = characters_left_message;
    switch (false) {
        case (characters_left_message > 32):
            count_message.style.color = "red";
            break;
        case (characters_left_message > 128):
            count_message.style.color = "orange";
            break;
        case (characters_left_message > 256):
            count_message.style.color = "yellow";
            break;
        default:
            count_message.style.color = "greenyellow";
    }
}

function nameLengthCheck() {
    var username_length = username.value.length;
    var characters_left_username = 16 - username_length;
    var count_username = document.getElementById("chars_left_username");
    count_username.innerHTML = characters_left_username;
    switch (false) {
        case (characters_left_username > 4):
            count_username.style.color = "red";
            break;
        case (characters_left_username > 8):
            count_username.style.color = "orange";
            break;
        case (characters_left_username > 12):
            count_username.style.color = "yellow";
            break;
        default:
            count_username.style.color = "greenyellow";
    }
}

message.addEventListener('keyup', messageLengthCheck, false);
message.addEventListener('keydown', messageLengthCheck, false);
username.addEventListener('keyup', nameLengthCheck, false);
username.addEventListener('keydown', nameLengthCheck, false);
