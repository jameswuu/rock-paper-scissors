// Create element to select buttons
const buttons = document.querySelectorAll("button");
let humanScore = document.querySelector("#human-score");
let computerScore = document.querySelector("#computer-score");


// Add Event listener when button is clicked
buttons.forEach((button)=> {
    button.addEventListener("click", () => {
        // Print User's Selection
        let human = button.id;
        let comment = document.querySelector("#comment");
        console.log(`User chose: ${human}`);

        // Get computer choice
        let computer = computerSelection();

        // Gets winner of the round
        let result = playRound(human, computer);

        // Updates the counter
        if (result === true) {
            // If human wins 
            humanScore.innerHTML = parseInt(humanScore.innerHTML) + 1;
            comment.innerHTML = "Human wins this round";

        } else if (result === false) {
            // If computer wins 
            computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
            comment.innerHTML = "Computer wins this round";
        } else if (result === null) {
            // If Draws
            comment.innerHTML = "Draws";
        }

        // Display winner
        if (parseInt(humanScore.innerHTML) === 5) {
            comment.innerHTML = "You won the game!";
            for (const button of buttons) {
                button.disabled = true;
            }
        } else if (parseInt(computerScore.innerHTML) === 5) {
            comment.innerHTML = "You lost the game!";
            for (const button of buttons) {
                button.disabled = true;
            }
        }
    })
})


// Function to generate a random choice
function computerSelection() {
    let choices = ["rock", "paper", "scissor"]
    let choice = choices[Math.floor(Math.random() * choices.length)]
    console.log(`Computer chose: ${choice}`);
    return choice;
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