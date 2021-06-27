function computerPlay() {
    //returns random integer from 0-2.
    let randNum = Math.floor(Math.random() * 3);
    if (randNum === 0) {
        return "rock";
    } else if (randNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

//const playerSelection = window.prompt("What's your selection");
let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        return ("It's a tie!");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return ("You win! Rock beats scissors.");
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        return ("You lose! Paper beats rocks.");
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        return ("You lose! Scissors beats paper.");
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return ("It's a tie");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return ("You Win! Paper beats rocks.");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return ("You lose! Rocks beat scissors.");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return ("You win! Paper beats scissors."); 
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return ("It's a tie!"); 
    }
  }

console.log(playRound(playerSelection, computerSelection));
