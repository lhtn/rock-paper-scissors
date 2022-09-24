// define a function named getComputerChoice 
// which randomly returns "Rock", "Paper", or "Scissors" when invoked
function getComputerChoice() {
    const shapes = ["ROCK", "PAPER", "SCISSORS"];
    return shapes[Math.floor(Math.random() * shapes.length)];
}


let playerScore = 0;
let computerScore = 0;


// Display results after pressing a button
let changeTextRock = () => {
    let results = document.getElementById("results");
    results.textContent = "You selected ROCK";
}

let changeTextPaper = () => {
    let results = document.getElementById("results");
    results.textContent = "You selected PAPER";
}

let changeTextScissors = () => {
    let results = document.getElementById("results");
    results.textContent = "You selected SCISSORS";
}


// Add an event listener to the buttons that call your playRound function with the correct 
// playerSelection every time a button is clicked.
let rockButton = document.getElementById("rock");
rockButton.addEventListener("click", changeTextRock);

let paperButton = document.getElementById("paper");
paperButton.addEventListener("click", changeTextPaper);

let scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", changeTextScissors);



// define a function named playRound which takes two parameters playerSelection and computerSelection
// and returns a string that declares the winner of the round such as "You Lose! Paper beats Rock"
// make playerSelection parameter case-insensitive
function playRound(playerSelection, computerSelection) {

    if ((playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") || 
    (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") || 
    (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER")) {
        playerScore = playerScore + 1;
        return `You win this round! ${playerSelection} beats ${computerSelection}`;

    } else if ((playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") || 
    (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") || 
    (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK")) {
        computerScore = computerScore + 1;
        return `You lose this round! ${computerSelection} beats ${playerSelection}`; 

    } else {
        playerScore = playerScore + 0;
        computerScore = computerScore + 0;
        return `It's a tie this round! ${playerSelection} ties with ${computerSelection}`;
    }
}



// define a function called game
// call the playRound function inside of this one to play a 5 round game that keeps score 
// and reports a winner or loser at the end

// function game() {
//     for (let i = 0; i < 5; i++) {
//         // use prompt to get input from the user
//         let playerSelection = prompt("Please enter Rock, Paper, or Scissors").toUpperCase();
//         const computerSelection = getComputerChoice().toUpperCase();
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