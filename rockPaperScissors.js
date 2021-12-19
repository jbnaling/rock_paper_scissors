//global variables
let userWins = 0;
let cpuWins = 0;
let roundNumber = 0;

/*
chooseRock = () => {
    let userChoice = "rock";
    playRound(userChoice);
};
*/

//start the game when you click a button
document.getElementById("Rock").addEventListener("click", chooseRock = () => {
    let userChoice = "rock";
    playRound(userChoice);
});

document.getElementById("Paper").addEventListener("click", () =>{
    let userChoice = "paper";
    playRound(userChoice);
});

document.getElementById("Scissors").addEventListener("click", () => {
    let userChoice = "scissors";
    playRound(userChoice);
});

//document.getElementById("Paper").addEventListener("click", choosePaper);
//document.getElementById("Scissors").addEventListener("click", chooseScissors);



/*
function chooseRock() {
    let userChoice = "rock";
    playRound(userChoice);
}
*/

function choosePaper() {
    let userChoice = "paper";
    playRound(userChoice);
}

function chooseScissors() {
    let userChoice = "scissors";
    playRound(userChoice);
}

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