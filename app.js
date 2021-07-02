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





let computerDiv = document.querySelector('#computerDiv');

let rockImage = document.createElement('img');
rockImage.classList.add("rockComputer");
rockImage.src = '/Rock1Comp.png';

/*
if (computerSelection === "rock") {
    computerDiv.appendChild(rockImage);
}
*/

let paperImage = document.createElement('img');
paperImage.classList.add("paperComputer");
paperImage.src = '/Paper1Comp.png';

/*
if (computerSelection === "paper") {
    computerDiv.appendChild(paperImage);
}
*/

let scissorImage = document.createElement('img');
scissorImage.classList.add("scissorsComputer");
scissorImage.src = '/Scissors1Comp.png';

/*
if (computerSelection === "scissors") {
    computerDiv.appendChild(scissorImage);
}
*/


let knightAudio = document.querySelector('#knightAudio');
let wizardAudio = document.querySelector('#wizardAudio');
let winAudio = document.querySelector('#winAudio');
let tieAudio = document.querySelector('#tieAudio');
let cannonAudio = document.querySelector('#cannonAudio');

let playerSelection = '';

let playerDiv = document.querySelector('#playerDiv');

let rockButton = document.querySelector('#rockButton');
let rockImage1 = document.createElement('img');
rockImage1.classList.add("rockPlayer");
rockImage1.src = '/Rock1.png';

rockButton.onclick = function() {
    playerSelection = 'rock';
    console.log('selected rock');
    if (playerDiv.children.length > 0) {
        playerDiv.removeChild(playerDiv.firstChild);
    }
    playerDiv.appendChild(rockImage1);
    if (computerDiv.children.length > 0) {
        computerDiv.removeChild(computerDiv.firstChild);
    }
    knightAudio.play();
}


let scissorsButton = document.querySelector('#scissorsButton');
let scissorsImage1 = document.createElement('img');
scissorsImage1.classList.add("scissorsPlayer");
scissorsImage1.src = '/Scissors1.png';

scissorsButton.onclick = function() {
    playerSelection = 'scissors';
    console.log('selected scissors');
    if (playerDiv.children.length > 0) {
        playerDiv.removeChild(playerDiv.firstChild);
    }
    playerDiv.appendChild(scissorsImage1);

    if (computerDiv.children.length > 0) {
        computerDiv.removeChild(computerDiv.firstChild);
    }
    wizardAudio.play();
}


let paperButton = document.querySelector('#paperButton');
let paperImage1 = document.createElement('img');
paperImage1.classList.add("paperPlayer");
paperImage1.src = '/Paper1.png';

paperButton.onclick = function() {
    playerSelection = 'paper';
    console.log('selected paper');
    if (playerDiv.children.length > 0) {
        playerDiv.removeChild(playerDiv.firstChild);
    }
    playerDiv.appendChild(paperImage1);
    if (computerDiv.children.length > 0) {
        computerDiv.removeChild(computerDiv.firstChild);
    }
    cannonAudio.play();
}





function playRound(playerSelection, computerSelection) {
    console.log("Round has been initiated");
    if (playerSelection == "rock" && computerSelection == "rock") {
        return ("It's a tie!");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return ("You win! Rock beats scissors.");
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        return ("You lose! Paper beats rock.");
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        return ("You lose! Scissors beats paper.");
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return ("It's a tie!");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return ("You win! Paper beats rock.");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return ("You lose! Rocks beat scissors.");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return ("You win! Scissors beats paper."); 
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return ("It's a tie!"); 
    }
  }


  let playerWins = 0; 
  let computerWins = 0;
  let playerScore = document.querySelector("#playerScore");

let fightButton = document.querySelector('#fightButton');

fightButton.addEventListener('click', () => {
    if (playerSelection == '') {
        return;
    }

    if (computerDiv.children.length > 0) {
        computerDiv.removeChild(computerDiv.firstChild);
    } 
    
    let result = document.querySelector('#result');
    result.innerHTML = '';
    
    
    computerSelection = computerPlay();

    if (computerSelection === "rock") {
        computerDiv.appendChild(rockImage);
        knightAudio.play();
    } else if (computerSelection === "paper") {
        computerDiv.appendChild(paperImage);
        cannonAudio.play();
    } else {
        computerDiv.appendChild(scissorImage);
        wizardAudio.play();
    }

    
    setTimeout(function () {
        result.innerHTML = playRound(playerSelection, computerSelection);
        if (result.innerHTML.indexOf("win") > -1) {
            winAudio.play();
            playerWins += 1;
        } else if (result.innerHTML.indexOf("lose") > -1) {
            loseAudio.play();
            computerWins += 1;
        } else {
            tieAudio.play();
        }

        playerScore.innerHTML = "Player Score: " + playerWins;
        computerScore.innerHTML = "Computer Score: " +computerWins;


        console.log("playerScore: " + playerWins);
        console.log("computerScore: " + computerWins);
    }, 800);

    
    
  });


