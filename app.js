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
rockImage.src = 'Rock1Comp.png';


let paperImage = document.createElement('img');
paperImage.classList.add("paperComputer");
paperImage.src = 'Paper1Comp.png';


let scissorImage = document.createElement('img');
scissorImage.classList.add("scissorsComputer");
scissorImage.src = 'Scissors1Comp.png';


let knightAudio = document.querySelector('#knightAudio');
let wizardAudio = document.querySelector('#wizardAudio');
let cannonAudio = document.querySelector('#cannonAudio');
let winAudio = document.querySelector('#winAudio');
let tieAudio = document.querySelector('#tieAudio');
let gameWinAudio = document.querySelector('#gameWinAudio');
let gameLoseAudio = document.querySelector('#gameLoseAudio');


let playerSelection = '';

let playerDiv = document.querySelector('#playerDiv');

let rockButton = document.querySelector('#rockButton');
let rockImage1 = document.createElement('img');
rockImage1.classList.add("rockPlayer");
rockImage1.src = 'Rock1.png';


rockButton.onclick = function() {
    playerSelection = 'rock';
    console.log('selected rock');
    if (playerDiv.children.length > 0) {
        playerDiv.removeChild(playerDiv.firstChild);
    }
    playerDiv.appendChild(rockImage1);
    let rockSelectionImg = playerDiv.appendChild(rockImage1);
    rockSelectionImg.className = "rockSelectionImg"
    //
    playerDiv.style.animation = "none";
    window.requestAnimationFrame(function(){
        playerDiv.style.animation = "bounce 0.4s linear";
      });
    //
    if (computerDiv.children.length > 0) {
        computerDiv.removeChild(computerDiv.firstChild);
    }
    knightAudio.load();
    knightAudio.play();
}


let scissorsButton = document.querySelector('#scissorsButton');
let scissorsImage1 = document.createElement('img');
scissorsImage1.classList.add("scissorsPlayer");
scissorsImage1.src = 'Scissors1.png';

scissorsButton.onclick = function() {
    playerSelection = 'scissors';
    console.log('selected scissors');
    if (playerDiv.children.length > 0) {
        playerDiv.removeChild(playerDiv.firstChild);
    }

    playerDiv.appendChild(scissorsImage1);
    let scissorsSelectionImg = playerDiv.appendChild(scissorsImage1);
    scissorsSelectionImg.className = "scissorsSelectionImg"


    playerDiv.style.animation = "none";
    window.requestAnimationFrame(function(){
        playerDiv.style.animation = "bounce 0.4s linear";
    });

    if (computerDiv.children.length > 0) {
        computerDiv.removeChild(computerDiv.firstChild);
    }
    wizardAudio.load();
    wizardAudio.play();
}


let paperButton = document.querySelector('#paperButton');
let paperImage1 = document.createElement('img');
paperImage1.classList.add("paperPlayer");
paperImage1.src = 'Paper1.png';

paperButton.onclick = function() {
    playerSelection = 'paper';
    console.log('selected paper');
    if (playerDiv.children.length > 0) {
        playerDiv.removeChild(playerDiv.firstChild);
    }
    playerDiv.appendChild(paperImage1);
    let paperSelectionImg = playerDiv.appendChild(paperImage1);
    paperSelectionImg.className = "paperSelectionImg"



    playerDiv.style.animation = "none";
    window.requestAnimationFrame(function(){
        playerDiv.style.animation = "bounce 0.4s linear";
      });
    if (computerDiv.children.length > 0) {
        computerDiv.removeChild(computerDiv.firstChild);
    }
    cannonAudio.load();
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
  playerScore.innerHTML = "Player: " ;
  computerScore.innerHTML = "Computer: " ;

let fightButton = document.querySelector('#fightButton');




let popupCountDiv = document.querySelector('#popupCountDiv');

function popupCount() {
    let popupCount = document.querySelector("#popupCount");
    popupCount.style.animation = "none";
    window.requestAnimationFrame(function(){
        popupCount.style.animation = "countDownBounce 2s linear";
    });
    popupCount.innerHTML = "ROCK";
    tieAudio.load();
    tieAudio.play();
    setTimeout(function () {
        popupCount.innerHTML = "PAPER";
        tieAudio.load();
        tieAudio.play();
    }, 500);
    setTimeout(function () {
        popupCount.innerHTML = "SCISSORS";
        tieAudio.load();
        tieAudio.play();
    }, 1000);
    setTimeout(function () {
        popupCount.innerHTML = "SHOOT!";
        tieAudio.load();
        tieAudio.play();
    }, 1500);
    setTimeout(function () {
        popupCountDiv.style.visibility = "hidden";
    }, 1800);
}


fightButton.addEventListener('click', () => {
    if (playerSelection == '') {
        return;
    }
    
    popupCountDiv.style.visibility = "visible";
    popupCountDiv.classList.toggle('active');
    if (playerWins !== 3 || computerWins !== 3) {
        popupCount();
    }


    

    if (computerDiv.children.length > 0) {
        computerDiv.removeChild(computerDiv.firstChild);
    } 
    
    let result = document.querySelector('#result');
    result.innerHTML = '';
    
    computerSelection = computerPlay();


    setTimeout(function () {
    

    if (computerSelection === "rock") {
        computerDiv.appendChild(rockImage);
        let rockComputerImg = computerDiv.appendChild(rockImage);
        rockComputerImg.className = "rockComputerImg";
        knightAudio.load();
        knightAudio.play();
    } else if (computerSelection === "paper") {
        computerDiv.appendChild(paperImage);
        let paperComputerImg = computerDiv.appendChild(paperImage);
        paperComputerImg.className = "paperComputerImg";
        cannonAudio.load()
        cannonAudio.play();
    } else {
        computerDiv.appendChild(scissorImage);
        let scissorsComputerImg = computerDiv.appendChild(scissorImage);
        scissorsComputerImg.className = "scissorsComputerImg";
        wizardAudio.load();
        wizardAudio.play();
    }

    }, 1900);

    
    function winBanner() {
        result.style.color = "green";
        result.style.background = "rgb(233, 255, 233)";
        result.style.border = "2px solid rgb(114, 185, 114)";
        result.style.animation = "none";
    }

    function loseBanner() {
        result.style.color = "rgb(255, 87, 87)";
        result.style.background = "rgb(255, 226, 226)";
        result.style.border = "2px solid rgb(255, 129, 129)";
        result.style.animation = "none";
    }

    function tieBanner() {
        result.style.color = "rgb(255, 87, 87)";
        result.style.background = "rgb(255, 255, 255)";
        result.style.border = "2px solid rgb(255, 255, 255)";
        result.style.color = "rgb(72, 72, 72)";
    }
    
    tieBanner();
    setTimeout(function () {
        result.innerHTML = playRound(playerSelection, computerSelection);
        if (result.innerHTML.indexOf("win") > -1) {
            winAudio.play();
            playerWins += 1;
            winBanner();
        

            computerDiv.style.animation = "none";
            window.requestAnimationFrame(function(){
                computerDiv.style.animation = "bounce 0.4s linear";
            });

            playerScore.style.animation = "none";
            window.requestAnimationFrame(function(){
                playerScore.style.animation = "bounce 0.4s linear";
            });

        } else if (result.innerHTML.indexOf("lose") > -1) {
            loseAudio.play();
            computerWins += 1;
            loseBanner();

            playerDiv.style.animation = "none";
            window.requestAnimationFrame(function(){
                playerDiv.style.animation = "bounce 0.4s linear";
            });

            computerScore.style.animation = "none";
            window.requestAnimationFrame(function(){
            computerScore.style.animation = "bounce 0.4s linear";
            });

        } else {
            tieAudio.load();
            tieAudio.play();
            tieBanner();
            result.style.animation = "none";
            window.requestAnimationFrame(function(){
            result.style.animation = "bounce 0.4s linear";
             });
        }

        playerScore.innerHTML = "Player: " + playerWins;
        computerScore.innerHTML = "Computer: " + computerWins;

        if (playerWins === 3 ) {
            let popupWinDiv = document.querySelector('#popupWinDiv');
            popupWinDiv.classList.toggle('active');
            gameWinAudio.play();
            
        } else if (computerWins === 3) {
            let popupLoseDiv = document.querySelector('#popupLoseDiv');
            popupLoseDiv.classList.toggle('active');
            gameLoseAudio.play();
        }

    }, 2500);

  });

let buttonPopupDiv = document.querySelector(".buttonPopupDiv");

buttonPopupDiv.addEventListener('click', () => {
    location.reload();
});

let popupButton = document.querySelector(".popupButton2");

popupButton.addEventListener('click', () => {
    location.reload();
});