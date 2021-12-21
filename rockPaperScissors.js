//this is the forked version of the repo
//global variables 
let userWins = 0;
let cpuWins = 0;
let roundNumber = 0;
const btnRock = document.getElementById("Rock");
const btnPaper = document.getElementById("Paper");
const btnScissors = document.getElementById("Scissors");





btnRock.addEventListener("click", (e) => {
    let userChoice = "rock";
    playRound(userChoice);
});


btnPaper.addEventListener("click", () => {
    let userChoice = "paper";
    playRound(userChoice);
});

btnScissors.addEventListener("click", () => {
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


function showRoundInfo(){

}


function showSummary (winner){
    if (winner == "userWin"){
        alert("You Win!");
    }
    else{
        alert("You lose!")
    }

        userWins = 0;
        cpuWins = 0;
        roundNumber = 0;
        document.getElementById("UserScore").innerHTML = "";
        document.getElementById("CPUScore").innerHTML = ""
        document.getElementById("RoundNumber").innerHTML = "";
        document.getElementById("GameResult").innerHTML = "";
        document.getElementById("CPUChoice").innerHTML = "";

}