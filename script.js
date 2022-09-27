// find the buttons on html document
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

const result = document.getElementById("result");

const playAgainBtn = document.getElementById("playAgainBtn");


// keep score
let playerScore = 0;
let computerScore = 0;


// player and computer selections
let playerSelection;

function getComputerChoice() {
    const shapes = ["ROCK", "PAPER", "SCISSORS"];
    return shapes[Math.floor(Math.random() * shapes.length)];
}


// play a round when the player makes a selection
function playRound() {
    rockBtn.addEventListener("click", () => {
        playerSelection = "ROCK";
        computerSelection = getComputerChoice();
        console.log(playerSelection, computerSelection)
        compareSelection();
        checkGameWinner();
    });
        
    paperBtn.addEventListener("click", () => {
        playerSelection = "PAPER";
        computerSelection = getComputerChoice();
        console.log(playerSelection, computerSelection)
        compareSelection();
        checkGameWinner();
    });
        
    scissorsBtn.addEventListener("click", () => {
        playerSelection = "SCISSORS";
        computerSelection = getComputerChoice();
        console.log(playerSelection, computerSelection)
        compareSelection();
        checkGameWinner();
    });
}


// compares playerSelection with computerSelection to determine who wins this round
function compareSelection() {
    switch (true) {
        case (playerSelection === "ROCK" && computerSelection === "SCISSORS"):
        case (playerSelection === "PAPER" && computerSelection === "ROCK"):
        case (playerSelection === "SCISSORS" && computerSelection === "PAPER"):
            playerScore += 1;    
            result.textContent = `You win this round! Player: ${playerScore}; Computer: ${computerScore}`;
            break; 
        case (playerSelection === "ROCK" && computerSelection === "PAPER"):
        case (playerSelection === "PAPER" && computerSelection === "SCISSORS"):
        case (playerSelection === "SCISSORS" && computerSelection === "ROCK"):
            computerScore += 1;
            result.textContent = `You lose this round! Player: ${playerScore}; Computer: ${computerScore}`;
            break;
        case (playerSelection === computerSelection):
            result.textContent = `It's a tie! Player: ${playerScore}; Computer: ${computerScore}`;
            break;
    }
}


// add points to playerScore and ComputerScore, then report a winner or loser at the end of the game
function checkGameWinner() {
    if (playerScore >= 5 || computerScore >= 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;

        if (playerScore === computerScore) {
            result.textContent = `It's a tie! Player: ${playerScore}; Computer: ${computerScore}`;
        } else if (playerScore > computerScore) {
            result.textContent = `You won the game! Player: ${playerScore}; Computer: ${computerScore}`;
        } else {
            result.textContent = `You lost the game! Player: ${playerScore}; Computer: ${computerScore}`;
        }
    }
}


// reset the game
function playAgain() {
    playAgainBtn.addEventListener("click", () => {
        playerScore = 0;
        computerScore = 0;
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
        result.textContent = '';
    })
}


playRound();

playAgain();