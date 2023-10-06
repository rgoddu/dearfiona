var mainElement = document.getElementById("main");
var welcomeElement = document.getElementById("welcome")


var startButton = document.querySelector("button")
startButton.addEventListener("click", () => {
    sendImage()
})

// const fs = require('fs');
const dir = './img';

 readdir(dir, (err, files) => {
  console.log(files.length);
});

var usedMemes = []
function sendImage() {
   
    var count3 = 0
    var imgInterval = setInterval(() => {
    var i = Math.floor(Math.random() * 19) + 1
    
    
    console.log(usedMemes)
        if (count3 > 20) {
            welcomeElement.textContent = "why did you click that?";
            for(var x = 0; x<usedMemes.length; x++)

            localStorage.setItem("memeNumber", i)
            usedMemes.push(localStorage.getItem("memeNumber"))
            clearInterval(imgInterval)
                ;
        }
        else {
            welcomeElement.textContent = ""
            welcomeElement.textContent = "fk fuck fuc fck"
            // var imgEl = document.createElement("img")
            var imgEl = document.querySelector("#imghere")
            mainElement.textContent = " ";
            var meme = "./assets/img/image" + i + ".jpg"
            imgEl.setAttribute("src", meme)
            mainElement.appendChild(imgEl)
            count3++;

        }
    }, 75)
}

// var message = "I'm sorry. You shared your problems. & I wanted to solve them but instead I was being an asshole. You are the sweetest and you don't deserve that. It makes me sad to think I hurt you. I am a jerk and I think I'm scared of being vulnerable. ";
// var story = message.split(".")

// var signing = ["My fault,", "Remi" , "also,"]

// function displayMessage() {
//     welcomeElement.textContent = "Dear Fiona,";
//     var count = 0
//     var msgInterval = setInterval(() => {
//         if (count > (story.length - 2)) {
//             clearInterval(msgInterval)
//             signature();
//         }
//         else {
//             mainElement.textContent = story[count];
            
//             count++;
//         }

//     }, 160);
// }

// function signature() {
//     var imgEl = document.createElement("img")
//     var count2 = 0
//     var sgnInterval = setInterval(() => {
//         if (signing[count2] === undefined) {
//             clearInterval(sgnInterval)
//             sendImage()
//         }
//         else {
//             mainElement.textContent = signing[count2];
//             count2++
//         }
//     }, 1000)
// }