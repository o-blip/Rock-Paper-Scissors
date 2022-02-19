function computerPlay() {
    const play = Math.floor(Math.random() * 3);
    if (play === 0) {
        return "Rock";
    } else if (play === 1) {
        return "Paper";
    } else return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        const message = "Tie! Play again.";
        return 2;
    } else if (playerSelection == "Scissors" && computerSelection === "Rock") {
        const message = "You Lose! Rock beats Scissors";
        return 0;
    } else if (playerSelection == "Scissors" && computerSelection === "Paper") {
        const message = "You Win! Scissors beats Paper";
        return 1
    } else if (playerSelection == "Rock" && computerSelection === "Paper") {
        const message = "You Lose! Paper beats Rock";
        return 0;
    } else if (playerSelection == "Rock" && computerSelection === "Scissors") {
        const message = "You Win! Rock beats Scissors";
        return 1;
    } else if (playerSelection == "Paper" && computerSelection === "Rock") {
        const mesage = "You Win! Paper beats Rock";
        return 1;
    } else if (playerSelection == "Paper" && computerSelection === "Scissors") {
        const message = "You Lose! Scissors beats Paper";
        return 0;
    }
}


function game(playerSelection) {
    // First select the scores from the html, then just add 1 to each scores (js
    // converts string to integer automatically)
    const playerScore = document.querySelector("#playerScore");
    const computerScore = document.querySelector("#computerScore");
    const winner = document.querySelector("#winner");

    if (playRound(playerSelection, computerPlay()) === 1) { // 1 means player won
        winner.textContent = '';
        playerScore.textContent++;
    } else if (playRound(playerSelection, computerPlay()) === 0) { // 0 means computer won, dont keep track of ties
        winner.textContent = '';
        computerScore.textContent++;
    }
    if (playerScore.textContent === '5') {
        winner.textContent = "You won!";
        playerScore.textContent = '0';
        computerScore.textContent = '0';
    } else if (computerScore.textContent === '5') {
        winner.textContent = 'You lose!';
        playerScore.textContent = '0';
        computerScore.textContent = '0';
    }
}



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => game(button.id))
});
