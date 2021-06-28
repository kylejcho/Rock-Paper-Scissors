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



let computerDiv = document.querySelector('#computerDiv');

let rockImage = document.createElement('img');
rockImage.classList.add("rockComputer");
rockImage.src = '/Rock.png';

if (computerSelection === "rock") {
    computerDiv.appendChild(rockImage);
}

let paperImage = document.createElement('img');
paperImage.classList.add("paperComputer");
paperImage.src = '/Paper.png';

if (computerSelection === "paper") {
    computerDiv.appendChild(paperImage);
}

let scissorImage = document.createElement('img');
scissorImage.classList.add("scissorsComputer");
scissorImage.src = '/Scissors.png';

if (computerSelection === "scissors") {
    computerDiv.appendChild(scissorImage);
}




let playerDiv = document.querySelector('#playerDiv');

let rockButton = document.querySelector('#rockButton');
let rockImage1 = document.createElement('img');
rockImage1.classList.add("rockPlayer");
rockImage1.src = '/Rock.png';

rockButton.onclick = function() {
    console.log('selected rock');
    playerDiv.appendChild(rockImage1);
}


let scissorsButton = document.querySelector('#scissorsButton');
let scissorsImage1 = document.createElement('img');
scissorsImage1.classList.add("scissorsPlayer");
scissorsImage1.src = '/Scissors.png';

scissorsButton.onclick = function() {
    alert("hi");
    console.log('selected scissors');
    playerDiv.appendChild(scissorsImage1);
}
