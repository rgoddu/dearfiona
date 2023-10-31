var mainElement = document.getElementById("main");
var welcomeElement = document.getElementById("welcome")
var startButton = document.querySelector("button")
var numberOfMemeImages = 19
var memeList = []
var memeStore = []


var imgEl = document.querySelector("#imghere")

for(var numberOfMemes = 1; numberOfMemes <= numberOfMemeImages; numberOfMemes++){
    memeList.push("image" + numberOfMemes)
}
console.log(memeList)

startButton.addEventListener("click", () => {
    unstoreMemeList()

    memeScroll()
    setTimeout(() => {
        sendImage()
    }, 2000);
})

function memeScroll(){
    var count = 0
    var spinInterval = setInterval(() => {
        var x = Math.floor(Math.random()*numberOfMemeImages) + 1
        var spinMeme = "./assets/img/image"+x+".jpg"
        imgEl.setAttribute("src", spinMeme)
        mainElement.appendChild(imgEl)
        count++
        if(count > 39){
            clearInterval(spinInterval)
        }
    }, 50);
}

function sendImage() {
   
    var i = Math.floor(Math.random() * memeList.length)
    console.log("i value" + i)
    
    
    var meme = "./assets/img/" + memeList[i] + ".jpg"
    imgEl.setAttribute("src", meme)
    mainElement.appendChild(imgEl)
        if(memeList.length%3 === 0){
            console.log(memeList.length)
            welcomeElement.textContent = "nobody ever listens to little old remi >:(";
        }
        else if(memeList.length%2 === 0){
        welcomeElement.textContent = "I am getting angry";
        console.log(memeList.length)

    }    else{
        welcomeElement.textContent = "why did you click that?";
        console.log(memeList.length)

    }
        memeList.splice(i, 1)
            console.log(memeList.length)
    storeMemeList()
           
        if(memeList.length === 0){
            mainElement.textContent = "no mas"
            return
        }
                ;
        }

function storeMemeList(){
    memeStore = JSON.stringify(memeList)
    localStorage.setItem("memeStore", memeStore)
}
function unstoreMemeList(){
    holdVariable = localStorage.getItem(memeStore)
    var checkMemes = JSON.parse(holdVariable)
    if(checkMemes !== null){
        memeList = checkMemes
    }
}