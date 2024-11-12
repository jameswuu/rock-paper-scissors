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
    console.log(choice);
}