
document.getElementById("PlayGame").addEventListener("click", startGame);

function startGame() {
  
  let winner = playRound();
  summary(winner);
}

//pick randomly between rock paper scissors
function getCpu(){
    //generate number 0-2
    let cpuChoice = Math.floor(Math.random() * 3);
    
    //return cpuChoice;
    if (cpuChoice == 0){
        return "rock";
    }
    else if (cpuChoice == 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function compareUserVCpu(CPU, User){
    if (CPU == "rock") {
        if (User == "scissors")
            return "CPUWin";
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
}

function playRound(){
    let roundWinner;
    let score = 0;
    let rounds = 0;
    
    keepGoing=true;
    do{
        let userChoice = window.prompt("Enter rock, paper, scissors");
        let cpuChoice = getCpu();
        rounds++;

        //temporarily hardcode cpuChoice;
        //cpuChoice = "rock";
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

        if (rounds==5){
            if (score>0){
                return "userWin";
            }
            else {
                return "cpuWin"
            }
        }

        if (score == 3){
            return "userWin";
        }
        if (score == -3){            
            return "cpuWin";
        }
    } while (keepGoing)
}

function summary (winner){
    if (winner == "userWin"){
        alert("You Win!");
    }
    else{
        alert("You lose!")
    }

}