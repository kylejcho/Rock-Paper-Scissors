//Randomly returns "rock", "paper" or "scissors" 
function computerPlay() {
    //returns random integer from 0-2, each number represents a different word. 
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


//Rock Image
let rockImage = document.createElement('img');
rockImage.classList.add("rockComputer");
rockImage.src = 'Rock1Comp.png';

//Paper Image
let paperImage = document.createElement('img');
paperImage.classList.add("paperComputer");
paperImage.src = 'Paper1Comp.png';

//Scissors Image
let scissorImage = document.createElement('img');
scissorImage.classList.add("scissorsComputer");
scissorImage.src = 'Scissors1Comp.png';



//Sound Effects
let knightAudio = document.querySelector('#knightAudio');
let wizardAudio = document.querySelector('#wizardAudio');
let cannonAudio = document.querySelector('#cannonAudio');
let winAudio = document.querySelector('#winAudio');
let tieAudio = document.querySelector('#tieAudio');
let countAudio = document.querySelector('#countAudio');
let gameWinAudio = document.querySelector('#gameWinAudio');
let gameLoseAudio = document.querySelector('#gameLoseAudio');



//Player Selection is blank until selection is made by user
let playerSelection = '';
let playerDiv = document.querySelector('#playerDiv');



//Rock Button
let rockButton = document.querySelector('#rockButton');
let rockImage1 = document.createElement('img');
rockImage1.classList.add("rockPlayer");
rockImage1.src = 'Rock1.png';

//User clicks Rock Button to select rock
rockButton.onclick = function() {
    playerSelection = 'rock';

    //Remove a previous player selection
    if (playerDiv.children.length > 0) {
        playerDiv.removeChild(playerDiv.firstChild);
    }

    //Add Rock Image to player's side
    playerDiv.appendChild(rockImage1);
    let rockSelectionImg = playerDiv.appendChild(rockImage1);
    rockSelectionImg.className = "rockSelectionImg"
    
    //Bounce animation
    playerDiv.style.animation = "none";
    window.requestAnimationFrame(function(){
        playerDiv.style.animation = "bounce 0.4s linear";
      });
    
    //remove previous computer selection
    if (computerDiv.children.length > 0) {
        computerDiv.removeChild(computerDiv.firstChild);
    }

    //play knight sound affect
    knightAudio.load();
    knightAudio.play();
}

//Scissors Button
let scissorsButton = document.querySelector('#scissorsButton');
let scissorsImage1 = document.createElement('img');
scissorsImage1.classList.add("scissorsPlayer");
scissorsImage1.src = 'Scissors1.png';

scissorsButton.onclick = function() {
    playerSelection = 'scissors';
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

//Paper Button
let paperButton = document.querySelector('#paperButton');
let paperImage1 = document.createElement('img');
paperImage1.classList.add("paperPlayer");
paperImage1.src = 'Paper1.png';

paperButton.onclick = function() {
    playerSelection = 'paper';
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



//Play a single round, return result 
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

//Player wins starts at 0
let playerWins = 0; 
let computerWins = 0;

//Scoreboard, game default starts without any score
let playerScore = document.querySelector("#playerScore");
playerScore.innerHTML = "Player: " ;
computerScore.innerHTML = "Computer: " ;


//computer selection and audio, delayed to run after countdown
function computerTurn() {
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
}




//Fight Button
let fightButton = document.querySelector('#fightButton');

//Click fightButton to start new round
fightButton.addEventListener('click', () => {
    //if user has not yet selected a player, stop the function
    if (playerSelection == '') {
        return;
    }
    
    //run countdown
    popupCountDiv.style.visibility = "visible";
    popupCountDiv.classList.toggle('active');
    popupCount();
    

    //If user does make a new player selection, remove computer selection after fight button is clicked
    if (computerDiv.children.length > 0) {
        computerDiv.removeChild(computerDiv.firstChild);
    } 
    
    //Dispay result on screen
    let result = document.querySelector('#result');
    result.innerHTML = '';
    
    //Display computer player and audio
    computerTurn();


    //Change the style of the result banner depending on the result of the round
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
    //tiebanner style is always displayed by default when round is not in progress
    tieBanner();


    setTimeout(function () {
        result.innerHTML = playRound(playerSelection, computerSelection);

        //if player wins round
        if (result.innerHTML.indexOf("win") > -1) {
            winAudio.play();
            //add 1 to player score
            playerWins += 1;
            winBanner();

            //bounce animation for computer side and player scoreboard
            computerDiv.style.animation = "none";
            window.requestAnimationFrame(function(){
                computerDiv.style.animation = "bounce 0.4s linear";
            });
            playerScore.style.animation = "none";
            window.requestAnimationFrame(function(){
                playerScore.style.animation = "bounce 0.4s linear";
            });

        //If player loses round, other way around
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

        //If round ends in a tie
        } else {
            countAudio.load();
            countAudio.play();
            tieBanner();
            result.style.animation = "none";
            window.requestAnimationFrame(function(){
                result.style.animation = "bounce 0.4s linear";
             });
        }

        //Display score on scoreboards
        playerScore.innerHTML = "Player: " + playerWins;
        computerScore.innerHTML = "Computer: " + computerWins;

        //Activate popup windows if player wins or loses, activate lose or win audio
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


//Popup window button refreshes page/restarts game.
let buttonPopupDiv = document.querySelector(".buttonPopupDiv");
buttonPopupDiv.addEventListener('click', function() {
    location.reload();
});
let popupButton = document.querySelector(".popupButton2");
popupButton.addEventListener('click', function(){
    location.reload();
});


//Countdown popup
let popupCountDiv = document.querySelector('#popupCountDiv');

//Displays "Rock, Paper, Scissors, Shoot!" in .5 second intervals 
function popupCount() {

    function tiePlay() {
        tieAudio.load();
        tieAudio.play();
    }
    
    let popupCount = document.querySelector("#popupCount");
    popupCount.style.animation = "none";
    window.requestAnimationFrame(function(){
        popupCount.style.animation = "countDownBounce 2s linear";
    });
    popupCount.innerHTML = "ROCK";
    tiePlay();
    setTimeout(function () {
        popupCount.innerHTML = "PAPER";
        tiePlay();
    }, 500);
    setTimeout(function () {
        popupCount.innerHTML = "SCISSORS";
        tiePlay();
    }, 1000);
    setTimeout(function () {
        popupCount.innerHTML = "SHOOT!";
        tiePlay();
    }, 1500);
    setTimeout(function () {
        popupCountDiv.style.visibility = "hidden";
    }, 1800);
}
