var mainElement = document.getElementById("main");
var message = "I'm sorry. You opened up and shared your problems with me. I wanted to help solve them but instead I was an asshole. You are the sweetest and you don't deserve that abuse. I really like hanging out with you. but I'm scared of being vulnerable.  I don't know why I'm like that and I don't know how to fix it. but it makes me sick to think about. ";
var story = message.split(".")

var signing = ["My fault,", "Remi"]


function displayMessage(){
    var count = 0
    var msgInterval = setInterval(() => {
        if (story[count] === undefined){
            clearInterval(msgInterval)
            signature()
        }
        else{
            mainElement.textContent = story[count];
            count++;
        }

    }, 1700);
}
function signature(){
    var count2 = 0
    var sgnInterval = setInterval(() => {
        if (signing[count2] === undefined){
            clearInterval(sgnInterval)
        }
        else{
            mainElement.textContent = signing[count2];
            count2++
        }
    },800)
}
displayMessage()