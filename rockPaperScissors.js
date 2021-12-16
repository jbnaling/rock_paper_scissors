





//temporarily disabled - starts game on click
//document.getElementById("PlayGame").addEventListener("click", startGame);

//make rock paper scissor buttons visible on click
document.getElementById("PlayGame").addEventListener("click", buttonVis);

function buttonVis() {
    //test appending an element an existing node
    const rock = document.createElement("button");
    const node = document.createTextNode("Rock");
    rock.appendChild(node);

    //add paper button
    const paper = document.createElement("button");
    const node2 = document.createTextNode("Paper");
    paper.appendChild(node2);

    //add scissors button
    const scissors = document.createElement("button");
    const node3 = document.createTextNode("Paper");
    scissors.appendChild(node3);


    //This code finds an existing element:
    const element = document.getElementById("GameInfo");

    //This code appends the new element to the existing element:
    element.appendChild(rock);
    element.appendChild(paper);
    element.appendChild(scissors);
}

function startGame() {
  
  gameVisible();
  elements.innerHTML = "test";

  //let winner = playRound();
  //summary(winner);
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