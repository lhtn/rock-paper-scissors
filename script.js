// define a function named getComputerChoice 
// which randomly returns "Rock", "Paper", or "Scissors" when invoked
function getComputerChoice() {
    var shapes = ["Rock", "Paper", "Scissors"];
    return shapes[Math.floor(Math.random() * shapes.length)];
}

// define a function named playRound which takes two parameters playerSelection and computerSelection
// and returns a string that declares the winner of the round such as "You Lose! Paper beats Rock"
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You lose! Paper beats Rock.";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors.";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock.";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper.";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors.";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper.";
    } else {
        return "It's a tie! Try again!";
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// define a function called game()
// call the playRound function
// which plays a 5 round game that keeps score
// report a winner or loser at the end