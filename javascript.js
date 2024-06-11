console.log("Hello,World!!!")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.random() * 3;

    if(choice > 2) {
        return "rock"
    } else if (choice > 1) {
        return "paper"
    } else return "scissors"
}

function getHumanChoice() {
    return prompt("What will you play?");
}

function playRound(human,computer) {
    const humanPick = human.toLowerCase();
    const computerPick = computer;
    
    if(humanPick == "rock" && computerPick == "rock") {
        console.log("Draw! You both chose Rock");
    }
    if(humanPick == "rock" && computerPick == "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++
    }
    if(humanPick == "rock" && computerPick == "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++
    }
    if(humanPick == "paper" && computerPick == "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++
    }
    if(humanPick == "paper" && computerPick == "paper") {
        console.log("Draw! You both chose Paper");
    }
    if(humanPick == "paper" && computerPick == "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++
    }
    if(humanPick == "scissors" && computerPick == "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++
    }
    if(humanPick == "scissors" && computerPick == "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++
    }
    if(humanPick == "scissors" && computerPick == "scissors") {
        console.log("Draw! You both chose Scissors");
    }

}

playRound(getHumanChoice(),getComputerChoice());
playRound(getHumanChoice(),getComputerChoice());
playRound(getHumanChoice(),getComputerChoice());
playRound(getHumanChoice(),getComputerChoice());
playRound(getHumanChoice(),getComputerChoice());