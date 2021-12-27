//this is the forked version of the repo 12-27
//global variables 
let userWins = 0;
let cpuWins = 0;
let roundNumber = 0;
const btnRock = document.getElementById("Rock");
const btnPaper = document.getElementById("Paper");
const btnScissors = document.getElementById("Scissors");


//create nodelist of buttons and put them into game buttons
const gameButtons = document.querySelectorAll(".gameBtn");
console.log(gameButtons.item[0]);

gameButtons.forEach(
    function(currentValue, currentIndex, listObj) {
      console.log(currentValue + ', ' + currentIndex + ', ' + this);
    });

btnRock.addEventListener("click", playRock = (e) => {
    document.getElementById("UserChoice").innerHTML = "You chose Rock";
    let userChoice = "rock";
    playRound(userChoice);
});


document.addEventListener('keydown', event => {

    //if modal is open close the modal 
    if (modal.style.display == "block"){
        modal.style.display = "none";
    }

    //if its the R fire rock btn event
    if (event.code=="KeyR"){
        highlightRock();
        playRock();
    }

    if (event.code=="KeyP"){
        highlightPaper();
        playPaper();
    }

    if (event.code=="KeyS"){
        highlightScissors();
        playScissors();
    }
});


//create events
function highlightRock () {
    //clear border style if applied previously
    removeBorder();
    btnRock.style.border = "thick solid red";    
}
function highlightPaper () {
    removeBorder();
    btnPaper.style.border = "thick solid red";
}
function highlightScissors () {
    removeBorder();
    btnScissors.style.border = "thick solid red";
}

function removeBorder (){
btnRock.style.border="1px solid #ddd";
btnPaper.style.border="1px solid #ddd";
btnScissors.style.border="1px solid #ddd";
}

btnPaper.addEventListener("click", playPaper = () => {
    document.getElementById("UserChoice").innerHTML = "You chose Paper";
    let userChoice = "paper";
    playRound(userChoice);
});

btnScissors.addEventListener("click", playScissors = () => {
    document.getElementById("UserChoice").innerHTML = "You chose Scissors";
    let userChoice = "scissors";
    playRound(userChoice);
});

btnRock.addEventListener("mouseover", (e) => {
    e.target.style.border = "thick solid red";
});

btnPaper.addEventListener("mouseover", (e) => {
    e.target.style.border = "thick solid red";
});

btnScissors.addEventListener("mouseover", (e) => {
    e.target.style.border = "thick solid red";
});


btnRock.addEventListener("mouseout", (e) => {
    e.target.style.border = "1px solid #ddd";
});

btnPaper.addEventListener("mouseout", (e) => {
    e.target.style.border = "1px solid #ddd";
});

btnScissors.addEventListener("mouseout", (e) => {
    e.target.style.border = "1px solid #ddd";
});



//pick randomly between rock paper scissors
function getCpu(){
    //generate number 0-2
    let cpuChoice = Math.floor(Math.random() * 3);
    
    //return cpuChoice and display to screen;
    if (cpuChoice == 0){
        document.getElementById("CPUChoice").innerHTML = "The CPU chose rock";
        return "rock";
    }
    else if (cpuChoice == 1){
        document.getElementById("CPUChoice").innerHTML = "The CPU chose paper";
        return "paper";
    }
    else {
        document.getElementById("CPUChoice").innerHTML = "The CPU chose scissors";
        return "scissors";
    }
}

function compareUserVCpu(CPU, User){
    if (CPU == "rock") {
        if (User == "scissors"){
            return "CPUWin";
        }
        else if (User == "paper")
            return "UserWin";
    }

    if (CPU == "paper") {
        if (User == "scissors")
            return "UserWin";
        else if (User == "rock")
            return "CPUWin";
    }

    if (CPU == "scissors") {
        if (User == "paper")
            return "CPUWin";
        else if (User == "rock")
            return "UserWin";
    }

    return "TieGame";
}

function playRound(userChoice){
    let cpuChoice = getCpu();
    let roundWinner = compareUserVCpu(cpuChoice, userChoice);
    roundNumber++;
    document.getElementById("RoundNumber").innerHTML = "Round # "+ roundNumber;

    //display rounder winner 
    //if round winner is userWin, userwin++
    if (roundWinner == "UserWin"){
        userWins++;
        //display to UserScore element
        document.getElementById("GameResult").innerHTML = "You Win!";
        document.getElementById("UserScore").innerHTML = "User Score: " + userWins;
    }

    if (roundWinner == "CPUWin"){
        cpuWins++;
        //display to UserScore element
        document.getElementById("GameResult").innerHTML = "You Lose!";
        document.getElementById("CPUScore").innerHTML = "CPU Score: " + cpuWins;
    }

    if (roundWinner == "TieGame"){
        //display to UserScore element
        document.getElementById("GameResult").innerHTML = "Tie Game";
    }


    //run summary if someone wins 
    if (userWins == 5){
        showSummary(userWins);
    }
    
    if (cpuWins == 5){
        showSummary(cpuWins);
    }
    
}

function showSummary (winner){
    if (winner == "userWin"){
        document.getElementById("seriesResult").innerHTML="You have won the series against the CPU: " + userWins + " to " + cpuWins;
    }
    else{
        document.getElementById("seriesResult").textContent="You lost this series to the CPU: " + userWins + " to " + cpuWins;
    }

    modal.style.display = "block";

    //reset the game scores
        userWins = 0;
        cpuWins = 0;
        roundNumber = 0;
        document.getElementById("UserScore").innerHTML = "";
        document.getElementById("CPUScore").innerHTML = ""
        document.getElementById("RoundNumber").innerHTML = "";
        document.getElementById("GameResult").innerHTML = "";
        document.getElementById("CPUChoice").innerHTML = "";
        document.getElementById("UserChoice").innerHTML = "";
        btnRock.style.border = "1px solid #ddd";
        btnPaper.style.border = "1px solid #ddd";
        btnScissors.style.border = "1px solid #ddd";


}




    // Get the modal
    var modal = document.getElementById("myModal");
    
 
    
    // Get the <span> element that closes the modal
    var btnClose = document.getElementById("close");
    

    
    // When the user clicks on <span> (x), close the modal
    btnClose.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }