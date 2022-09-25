// define a function named getComputerChoice 
// which randomly returns "Rock", "Paper", or "Scissors" when invoked
function getComputerChoice() {
    const shapes = ["ROCK", "PAPER", "SCISSORS"];
    return shapes[Math.floor(Math.random() * shapes.length)];
}


let playerScore = 0;
let computerScore = 0;


// Add an event listener to the buttons that call your playRound function with the correct 
// playerSelection every time a button is clicked.
let results = document.getElementById("results");
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", event => {
    results.textContent = "You chose ROCK";
});

paperButton.addEventListener("click", event => {
    results.textContent = "You chose PAPER";
});

scissorsButton.addEventListener("click", event => {
    results.textContent = "You chose SCISSORS";
});



// define a function named playRound which takes two parameters playerSelection and computerSelection
// and returns a string that declares the winner of the round such as "You Lose! Paper beats Rock"
// make playerSelection parameter case-insensitive
// function playRound(playerSelection, computerSelection) {

//     if ((playerSelection.toUpperCase() === "ROCK" && computerSelection() === "SCISSORS") || 
//     (playerSelection.toUpperCase() === "PAPER" && computerSelection() === "ROCK") || 
//     (playerSelection.toUpperCase() === "SCISSORS" && computerSelection() === "PAPER")) {
//         playerScore = playerScore + 1;
//         return `You win this round! ${playerSelection} beats ${computerSelection}`;

//     } else if ((playerSelection.toUpperCase() === "ROCK" && computerSelection() === "PAPER") || 
//     (playerSelection.toUpperCase() === "PAPER" && computerSelection() === "SCISSORS") || 
//     (playerSelection.toUpperCase() === "SCISSORS" && computerSelection() === "ROCK")) {
//         computerScore = computerScore + 1;
//         return `You lose this round! ${computerSelection} beats ${playerSelection}`; 

//     } else {
//         playerScore = playerScore + 0;
//         computerScore = computerScore + 0;
//         return `It's a tie this round! ${playerSelection} ties with ${computerSelection}`;
//     }
// }



// define a function called game
// call the playRound function inside of this one to play a 5 round game that keeps score 
// and reports a winner or loser at the end

// function game() {
//     for (let i = 0; i < 5; i++) {
//         // use prompt to get input from the user
//         let playerSelection = prompt("Please enter Rock, Paper, or Scissors").toUpperCase();
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//     }
//     if (playerScore === computerScore) {
//         console.log(`It's a tie! Player: ${playerScore}; Computer: ${computerScore}`) 
//     } else if (playerScore > computerScore) {
//             console.log(`You won the game! Player: ${playerScore}; Computer: ${computerScore}`)
//     } else {
//         console.log(`You lost the game! Player: ${playerScore}; Computer: ${computerScore}`)
//     }
// }

// game();