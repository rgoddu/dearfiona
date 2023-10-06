var mainElement = document.getElementById("main");
var welcomeElement = document.getElementById("welcome")

var message = "I'm sorry. You shared your problems. & I wanted to solve them but instead I was being an asshole. You are the sweetest and you don't deserve that. It makes me sad to think I hurt you. I am a jerk and I think I'm scared of being vulnerable. ";
var story = message.split(".")

var signing = ["My fault,", "Remi" , "also,"]

sendImage()

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


function sendImage() {
    welcomeElement.textContent = "mamaaa";
    var count3 = 0
    var imgInterval = setInterval(() => {

        if (count3 > 20) {
            clearInterval(imgInterval)
                ;
        }
        else {
            // var imgEl = document.createElement("img")
            var imgEl = document.querySelector("#imghere")
            mainElement.textContent = " ";
            var i = Math.floor(Math.random() * 19) + 1
            var meme = "./assets/img/image" + i + ".jpg"
            imgEl.setAttribute("src", meme)
            mainElement.appendChild(imgEl)
            count3++;

        }
    }, 75)
}