/*
Script that animates the header text with infinite deleting and typing effect
Original source of the script: https://codepen.io/haaswill/pen/VKzXve
Author: Willian Haas - https://www.willianhaas.com/
Used and modified by: Allan Nurymov
*/

let text = "gigachat.";
let timer;

function deletingEffect() {
    let word = text.split("");
    var loopDeleting = function () {
        if (word.length > 0) {
            word.pop();
            document.getElementById('word').innerHTML = word.join("");
        } else {
            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 100);
    };
    loopDeleting();
};

function typingEffect() {
    let word = text.split("");
    var loopTyping = function () {
        if (word.length > 0) {
            document.getElementById('word').innerHTML += word.shift();
        } else {
            deletingEffect();
            return false;
        };
        timer = setTimeout(loopTyping, 250);
    };
    loopTyping();
};

deletingEffect();