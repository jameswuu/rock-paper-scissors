// Function to generate a random choice
function getComputerChoice() {
    let num = Math.random();
    let choice = null;
    if (num >= 0 && num <=0.33) {
        choice = "Rock";
    } else if (num > 0.33 && num<=0.66) {
        choice = "Paper";
    } else {
        choice = "Scissor"
    }
    console.log(num);
    console.log(`The computer has chose: ${choice}`);
}


// Prompt user for input
function getHumamChoice() {
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
        return console.log(`The user has chose: ${answer}`);
    }
}