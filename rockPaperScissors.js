//global variables
let userWins = 0;
let cpuWins = 0;
let roundNumber = 0;


//starts game on click
//document.getElementById("PlayGame").addEventListener("click", startGame);

//choose rock onclick and hold it as a variable
//var userChoice = null;
//document.getElementById("Rock").addEventListener("click", function () {
//    userChoice = "rock";
//    startGame()} );
    


document.getElementById("Rock").addEventListener("click", chooseRock);
document.getElementById("Paper").addEventListener("click", choosePaper);
document.getElementById("Scissors").addEventListener("click", chooseScissors);

function chooseRock() {
    let userChoice = "rock";
    playRound(userChoice);
}

function choosePaper() {
    let userChoice = "paper";
    playRound(userChoice);
}

function chooseScissors() {
    let userChoice = "scissors";
    playRound(userChoice);
}

function gameVisible() {
    let x = document.getElementById("GameInfo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
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
    //disabled until i figure out how to scope this properly
    //let score = 0;
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
        document.getElementById("UserScore").innerHTML = "User Score " + userWins;
    }

    if (roundWinner == "CPUWin"){
        cpuWins++;
        //display to UserScore element
        document.getElementById("GameResult").innerHTML = "You Lose!";
        document.getElementById("CPUScore").innerHTML = "CPU Score " + cpuWins;
    }

    if (roundWinner == "TieGame"){
        //display to UserScore element
        document.getElementById("GameResult").innerHTML = "Tie Game";
    }

    if (userWins == 5){
        alert("You have beaten the Computer!")
        userWins = 0;
        cpuWins = 0;
        roundNumber = 0;
        document.getElementById("UserScore").innerHTML = "";
        document.getElementById("CPUScore").innerHTML = ""
        document.getElementById("RoundNumber").innerHTML = "";
        document.getElementById("GameResult").innerHTML = "";
        document.getElementById("CPUChoice").innerHTML = "";
    }
    if (cpuWins == 5){
        alert("The Computer has beaten you")
        userWins = 0;
        cpuWins = 0;
        roundNumber = 0;
        document.getElementById("UserScore").innerHTML = "";
        document.getElementById("CPUScore").innerHTML = ""
        document.getElementById("RoundNumber").innerHTML = "";
        document.getElementById("GameResult").innerHTML = "";
        document.getElementById("CPUChoice").innerHTML = "";
    }


    //alert("userChoice is " + userChoice);
    //alert("cpuChoice is " + cpuChoice);

    /* finds round winner and loops until finding winner
    keepGoing=true;
    do{
        
        let cpuChoice = getCpu();
        rounds++;
        

        roundWinner = compareUserVCpu(cpuChoice, userChoice);

        if (roundWinner == "UserWin"){
            score++;
            alert("You win this round! \nThe Cpu chose: " + cpuChoice + " \nYour score is: " + score);
        }
        else if (roundWinner == "CPUWin"){
            score--;
            alert("You lost this round! \nThe Cpu chose: " + cpuChoice + " \nYour score is: " + score);
        }
        else{
            alert("You tied this round! \nThe Cpu chose: " + cpuChoice + " \nYour score is: " + score);
        }

        if (score == 5){
            return "userWin";
        }
        if (score == -5){            
            return "cpuWin";
        }
    } while (keepGoing)
    */
}



function summary (winner){
    if (winner == "userWin"){
        alert("You Win!");
    }
    else{
        alert("You lose!")
    }

}