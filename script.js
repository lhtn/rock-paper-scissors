// define a function named getComputerChoice 
// which randomly returns "Rock", "Paper", or "Scissors" when invoked
function getComputerChoice() {
    var shapes = ["ROCK", "PAPER", "SCISSORS"];
    return shapes[Math.floor(Math.random() * shapes.length)];
}


// define a function named playRound which takes two parameters playerSelection and computerSelection
// and returns a string that declares the winner of the round such as "You Lose! Paper beats Rock"
// make playerSelection parameter case-insensitive
function playRound(playerSelection, computerSelection) {
//    let playerWin = 0;
//    let computerWin = 0;
    if ((playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") || 
    (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") || 
    (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK")) {
//        computerWin = computerWin + 1;
        return `You lose this round! ${computerSelection} beats ${playerSelection}`; 

    } else if ((playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") || 
    (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") || 
    (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER")) {
//        playerWin = playerWin + 1;
        return `You win this round! ${playerSelection} beats ${computerSelection}`;

    } else {
//        playerWin = playerWin + 1;
//        computerWin = computerWin + 1;
        return `It's a tie this round! ${playerSelection} ties with ${computerSelection}`;
    }
}


// define a function called game
// call the playRound function which plays a 5 round game that keeps score
// when a user inputs Rock, Paper or Scissors
// declare a variable i and assign it to 0. Loop from 0 until 5. Increment i by 1 with every iteration
// report a winner or loser at the end

function game() {
    for (let i = 0; i < 5; i++) {
        // use prompt to get input from the user
        let playerSelection = prompt("Please enter Rock, Paper, or Scissors").toUpperCase();
        const computerSelection = getComputerChoice().toUpperCase();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();