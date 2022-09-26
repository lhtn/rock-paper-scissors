// find the buttons on html
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

const roundResult = document.getElementById("roundResult");

const gameWinner = document.getElementById("gameWinner");
const playAgainBtn = document.getElementById("playAgainBtn");


// keep score
let playerScore = 0;
let computerScore = 0;
let rounds = 0;


// player and computer selections
let playerSelection;
let computerSelection = getComputerChoice();

function getComputerChoice() {
    const shapes = ["ROCK", "PAPER", "SCISSORS"];
    return shapes[Math.floor(Math.random() * shapes.length)];
}


// play a round when a user makes a selection
function playRound() {
    rockBtn.addEventListener("click", () => {
        playerSelection = "ROCK";
        computerSelection = getComputerChoice();
        console.log(playerSelection, computerSelection)
        compareSelection();
        rounds++;
        checkGameWinner();
    });
        
    paperBtn.addEventListener("click", () => {
        playerSelection = "PAPER";
        computerSelection = getComputerChoice();
        console.log(playerSelection, computerSelection)
        compareSelection();
        rounds++;
        checkGameWinner();
    });
        
    scissorsBtn.addEventListener("click", () => {
        playerSelection = "SCISSORS";
        computerSelection = getComputerChoice();
        console.log(playerSelection, computerSelection)
        compareSelection();
        rounds++;
        checkGameWinner();
    });
}


// compares playerSelection with computerSelection to determine who wins this round
function compareSelection() {
    switch (true) {
        case (playerSelection === 'ROCK' && computerSelection === 'SCISSORS'):
        case (playerSelection === 'PAPER' && computerSelection === 'ROCK'):
        case (playerSelection === 'SCISSORS' && computerSelection === 'PAPER'):
            roundResult.textContent = "You win this round";
            break; 
        case (playerSelection === 'ROCK' && computerSelection === 'PAPER'):
        case (playerSelection === 'PAPER' && computerSelection === 'SCISSORS'):
        case (playerSelection === 'SCISSORS' && computerSelection === 'ROCK'):
            roundResult.textContent = "You lose this round";
            break;
        case (playerSelection === computerSelection):
            roundResult.textContent = "It's a tie this round";
            break;
    }
}


// add points to playerScore and ComputerScore, then report a winner or loser at the end of the game
function checkGameWinner() {
    if (rounds === 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;

        if (playerScore === computerScore) {
            gameWinner.textContent = `It's a tie! Player: ${playerScore}; Computer: ${computerScore}`;
        } else if (playerScore > computerScore) {
            gameWinner.textContent = `You won the game! Player: ${playerScore}; Computer: ${computerScore}`;
        } else {
            gameWinner.textContent = `You lost the game! Player: ${playerScore}; Computer: ${computerScore}`;
        }
    }
}

playRound();