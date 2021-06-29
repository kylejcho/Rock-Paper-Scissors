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
console.log(computerSelection);




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



let playerSelection = '';

let playerDiv = document.querySelector('#playerDiv');

let rockButton = document.querySelector('#rockButton');
let rockImage1 = document.createElement('img');
rockImage1.classList.add("rockPlayer");
rockImage1.src = '/Rock.png';

rockButton.onclick = function() {
    playerSelection = 'rock';
    console.log('selected rock');
    if (playerDiv.children.length > 0) {
        playerDiv.removeChild(playerDiv.firstChild);
    }
    playerDiv.appendChild(rockImage1);
}


let scissorsButton = document.querySelector('#scissorsButton');
let scissorsImage1 = document.createElement('img');
scissorsImage1.classList.add("scissorsPlayer");
scissorsImage1.src = '/Scissors.png';

scissorsButton.onclick = function() {
    playerSelection = 'scissors';
    console.log('selected scissors');
    if (playerDiv.children.length > 0) {
        playerDiv.removeChild(playerDiv.firstChild);
    }
    playerDiv.appendChild(scissorsImage1);
}


let paperButton = document.querySelector('#paperButton');
let paperImage1 = document.createElement('img');
paperImage1.classList.add("paperPlayer");
paperImage1.src = '/Paper.png';

paperButton.onclick = function() {
    playerSelection = 'paper';
    console.log('selected paper');
    if (playerDiv.children.length > 0) {
        playerDiv.removeChild(playerDiv.firstChild);
    }
    playerDiv.appendChild(paperImage1);
}





function playRound(playerSelection, computerSelection) {
    console.log("Round has been initiated");
    console.log(computerSelection);
    console.log(playerSelection);
    if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("its a tie");
        return ("It's a tie!");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats scissors.");
        return ("You win! Rock beats scissors.");
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        console.log("You lose! Paper beats rocks.");
        return ("You lose! Paper beats rocks.");
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        console.log("You lose! Scissors beats paper.");
        return ("You lose! Scissors beats paper.");
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("It's a tie");
        return ("It's a tie");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You Win! Paper beats rocks.");
        return ("You Win! Paper beats rocks.");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rocks beat scissors.");
        return ("You lose! Rocks beat scissors.");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Paper beats scissors.");
        return ("You win! Paper beats scissors."); 
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("It's a tie");
        return ("It's a tie!"); 
    }
  }






let fightButton = document.querySelector('#fightButton');

fightButton.addEventListener('click', () => {
    playRound(playerSelection, computerSelection);
  });

