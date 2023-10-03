var mainElement = document.getElementById("main");
var message = "Your dad hitting your mom is not funny. Even if he hit like a girl. it still would not be that much funny. I don't want to make you sad :(";
var story = message.split(".")

var signing = ["Sincerely,", "Remi"]


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

    }, 2000);
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