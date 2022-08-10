// define a function named getComputerChoice 
// which randomly returns "Rock", "Paper", or "Scissors" when invoked
function getComputerChoice() {
    var shapes = ["Rock", "Paper", "Scissors"];
    return shapes[Math.floor(Math.random() * shapes.length)];
}


// define a function named playRound which takes two parameters playerSelection and computerSelection
// and returns a string that declares the winner of the round such as "You Lose! Paper beats Rock"
// make playerSelection parameter case-insensitive
function playRound(playerSelection, computerSelection) {
//    let playerWin = 0;
//    let computerWin = 0;
    if ((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") || 
    (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") || 
    (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock")) {
//        computerWin = computerWin + 1;
        return `You lose this round! ${computerSelection} beats ${playerSelection}`; 

    } else if ((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") || 
    (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") || 
    (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper")) {
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
        let playerSelection = prompt("Please enter Rock, Paper, or Scissors");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();