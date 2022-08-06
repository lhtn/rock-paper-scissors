// define a function named getComputerChoice 
// which randomly returns "Rock", "Paper", or "Scissors" when invoked
function getComputerChoice() {
    var shapes = ["Rock", "Paper", "Scissors"];
    return shapes[Math.floor(Math.random() * shapes.length)];
}

console.log(getComputerChoice());

// define a function named playRound 
// which takes two parameters playerSelection and computerSelection
// and returns a string that declares the winner of the round such as "You Lose! Paper beats Rock"

// define a function called game()
// call the playRound function
// which plays a 5 round game that keeps score
// report a winner or loser at the end