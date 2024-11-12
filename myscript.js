// Function to generate a random choice
function getComputerChoice() {
    let num = Math.random();
    let choice = null;
    if (num >= 0 && num <=0.33) {
        choice = "rock";
    } else if (num > 0.33 && num<=0.66) {
        choice = "paper";
    } else {
        choice = "scissor"
    }
    console.log(`Computer chose: ${choice}`);
    return choice;
}


// Prompt user for input
function getHumanChoice() {
    let answer = prompt("What's your choice: Rock, Paper, Scissor?").toLowerCase();
    let selection = ["rock", "paper", "scissor"];
    
    // To ensure the input is not empty 
    if (!answer){
        return console.log(`Input cannot be empty`);
    } 
    // To valid the answer with the selection list
    else if (!selection.includes(answer)) {
        return console.log(`Invalid Input: ${answer}`);
    } 
    // Print to console to comfirm the user's answer
    else {
        console.log(`User chose: ${answer}`);
        return answer;
    }
}


// Create a function to play one round
function playRound(human, computer) {
    // Dubugging line
    console.log(`The human has answer ${human} and computer is ${computer}` );

    // if the human and computer has the same choice
    if (human === computer) {
        console.log(`Draws!`)
        return null;
    } 
    // User wins
    else if ( (human === "rock" && computer === "scissor" ) || (human === "paper" && computer === "rock") || 
              (human === "scissor" && computer === "paper") ) {
        console.log(`You win! ${human} beats ${computer}`);
        return true;
    } else {
        console.log(`You lose! ${computer} beats ${human}`);
        return false;
    }
}


// Initalize the score for player and computer
let humanScore = 0;
let computerScore = 0;


// Create a loop before we have a winner
while (humanScore < 5 || computerScore < 5) {

    // Get choices for human and computer
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    
    // Get the result 
    let result = playRound(humanSelection, computerSelection);

    // Check who wins this round
    if (result) {
        humanScore++;
    } else if (!result) {
        computerScore++;
    } 
    console.log(`Score: Human ${humanScore} and Computer${computerScore}`);
}


// To announce the winner 
if (humanScore > computerScore) {
    console.log(`Congrats you win the game!`);
} else {
    console.log(`You lost :( the game`);
}
