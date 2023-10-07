var mainElement = document.getElementById("main");
var welcomeElement = document.getElementById("welcome")
var startButton = document.querySelector("button")
var numberOfMemeImages = 19
var memeList = []

for(var numberOfMemes = 1; numberOfMemes <= numberOfMemeImages; numberOfMemes++){
    memeList.push("image" + numberOfMemes)
}
console.log(memeList)

startButton.addEventListener("click", () => {
    setTimeout(() => {
        sendImage()
    }, 2000);
})

function memeScroll(){
    var count = 0
    var 
}

function sendImage() {
   
    // var count3 = 0
    // var imgInterval = setInterval(() => {
    var i = Math.floor(Math.random() * memeList.length)
    console.log("i value" + i)
    
    var imgEl = document.querySelector("#imghere")
    var meme = "./assets/img/" + memeList[i] + ".jpg"
    imgEl.setAttribute("src", meme)
    mainElement.appendChild(imgEl)
        // if (count3 > 20) {
            welcomeElement.textContent = "why did you click that?";
            
            memeList.splice(i, 1)
            console.log(memeList.length)
        if(memeList.length === 0){
            mainElement.textContent = "no mas"
            return
        }
            // clearInterval(imgInterval)
                ;
        }
        // else {
            // welcomeElement.textContent = ""
            // welcomeElement.textContent = "wow"
            // var imgEl = document.createElement("img")
            // count3++;

        // }
    // }, 75)
// }

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