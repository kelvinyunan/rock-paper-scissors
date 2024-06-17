const playerRock = document.getElementById('rock');
const playerPaper = document.getElementById('paper');
const playerScissors = document.getElementById('scissors');
const results = document.getElementById('result');
const winOrLose = document.getElementById('winLose');
const humanScores = document.getElementById('humanScore');
const computerScores = document.getElementById('computerScore');
const resetDiv = document.getElementById('reset');

let humanScore = 0;
let computerScore = 0;

playerRock.addEventListener('click', ()=>{
    playRound("rock",getComputerChoice());
})
playerPaper.addEventListener('click', ()=>{
    playRound("paper",getComputerChoice());
})
playerScissors.addEventListener('click', ()=>{
    playRound("scissors",getComputerChoice());
})

function getComputerChoice() {
    let choice = Math.random() * 3;

    if(choice > 2) {
        return "rock"
    } else if (choice > 1) {
        return "paper"
    } else return "scissors"
}

function playRound(human,computer) {
    const humanPick = human;
    const computerPick = computer;
    
    if(humanPick == "rock" && computerPick == "rock") {
        results.innerText = "Draw! You both chose Rock";
    }
    if(humanPick == "rock" && computerPick == "paper") {
        results.innerText = "You lose! Paper beats Rock";
        computerScore++;
        updateStatus();
    }
    if(humanPick == "rock" && computerPick == "scissors") {
        results.innerText = "You win! Rock beats Scissors";
        humanScore++;
        updateStatus();
    }
    if(humanPick == "paper" && computerPick == "rock") {
        results.innerText = "You win! Paper beats Rock";
        humanScore++;
        updateStatus();
    }
    if(humanPick == "paper" && computerPick == "paper") {
        results.innerText = "Draw! You both chose Paper";
    }
    if(humanPick == "paper" && computerPick == "scissors") {
        results.innerText = "You lose! Scissors beats Paper";
        computerScore++;
        updateStatus();
    }
    if(humanPick == "scissors" && computerPick == "rock") {
        results.innerText = "You lose! Rock beats Scissors";
        computerScore++;
        updateStatus();
    }
    if(humanPick == "scissors" && computerPick == "paper") {
        results.innerText = "You win! Scissors beats Paper";
        humanScore++;
        updateStatus();
    }
    if(humanPick == "scissors" && computerPick == "scissors") {
        results.innerText = "Draw! You both chose Scissors";
    }

}

function updateStatus() {
    humanScores.innerText = humanScore;
    computerScores.innerText = computerScore;
    
    if (humanScore > 5) {
        winOrLose.innerText = "Congrats, You Win!";
        resetDiv.innerHTML = `<button onclick="resetGame()">Play Again?</button>`;
        
    } else if (computerScore > 5) {
        winOrLose.innerText = "You Lose! Better Luck Next Time";
        resetDiv.innerHTML = `<button onclick="resetGame()">Play Again?</button>`;
    }

}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanScores.innerText = "";
    computerScores.innerText = "";
    results.innerText = "";
    winOrLose.innerText = "";
    resetDiv.innerHTML = "";
}