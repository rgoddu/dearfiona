var mainElement = document.getElementById("main");
var message = "I'm sorry. You shared your problems with me. I wanted to solve them but instead I was an asshole. You are the sweetest and you don't deserve that. I like hanging out with you. but I'm scared of being vulnerable.  I don't know why I'm like that. it makes me sick to think I hurt you. ";
var story = message.split(".")

var signing = ["My fault,", "Remi"]


function displayMessage(){
    var count = 0
    var msgInterval = setInterval(() => {
        if (count > (story.length - 2)){
            clearInterval(msgInterval)
            sendImage();
        }
        else{
            mainElement.textContent = story[count];
            count++;
        }

    }, 1800);
}
function sendImage(){
    
    var count3 = 0
    var imgInterval = setInterval(() => {
        
        if (count3 > 1){
            clearInterval(imgInterval)
            signature();
        }
        else{
            var imgEl = document.createElement("img")
            mainElement.textContent = " ";
            imgEl.setAttribute("src", "assets/IMG-8930.jpg")
            mainElement.appendChild(imgEl)
            count3++;
        
        }
    },400)
}
function signature(){
    var imgEl = document.createElement("img")
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