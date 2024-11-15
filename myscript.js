// Function to generate a random choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissor"]
    let choice = choices[Math.floor(Math.random() * choices.length)]
    console.log(`Computer chose: ${choice}`);
    return choice;
}


// Prompt user for input
function getHumanChoice() {
    let humanchoice = document.querySelector("#choice");
    humanchoice.addEventListener('click', (button) => {
        let target = button.target;

        switch(target.id) {
            case 'rock':
                console.log('Rock was clicked');
                break;
            case 'paper':
                console.log('Paper was clicked');
                break;
            case 'scissor':
                console.log('Scissor was clicked');
                break;
        }
        console.log(`User chose: ${target}`);
        return target;
    });
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
let counter = 1;


// Create a loop before we have a winner
while (true) {
    console.log(`Round ${counter}`);

    // Get choices for human and computer
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    
    // Get the result 
    let result = playRound(humanSelection, computerSelection);

    // Check who wins this round
    if (result === true) {
        humanScore++;
    } else if (result === false) {
        computerScore++;
    }
    
    console.log(`Human: ${humanScore} Computer: ${computerScore}`);
    
    // To check if we have a winner
    if (humanScore >= 5 || computerScore >= 5) {
        break;
    }
    
    counter++;
}


// To announce the winner 
if (humanScore > computerScore) {
    console.log(`Congrats you win the game!`);
} else {
    console.log(`You lost the game`);
}
