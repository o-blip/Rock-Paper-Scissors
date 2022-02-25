function computerPlay() {
    const play = Math.floor(Math.random() * 3);
    if (play === 0) {
        return "Rock";
    } else if (play === 1) {
        return "Paper";
    } else return "Scissors";
}

function playRound(playerSelection, computerSelection) {


    switch (playerSelection) {
        // First switch determine player's throw
        // 1: player wins, 0 computer wins, 2 means tie
        case 'Rock':
            switch (computerSelection) {
                case 'Paper':
                    return 0;
                case 'Scissors':
                    return 1;
            }
            break;
        case 'Scissors':
            switch (computerSelection) {
                case 'Paper':
                    return 1;
                case 'Rock':
                    return 0;
            }
            break;
        case 'Paper':
            switch (computerSelection) {
                case 'Rock':
                    return 0;
                case 'Scissors':
                    return 1;
            }
            break;
        default:
            return 2;
    }
}


function game(playerSelection) {
    // First select the scores from the html, then just add 1 to each scores
    const playerScore = document.querySelector("#playerScore");
    const computerScore = document.querySelector("#computerScore");
    const winner = document.querySelector("#winner");

    if (playerScore.textContent === '5' || computerScore.textContent === '5'){
        winner.textContent = '';
        playerScore.textContent = '0';
        computerScore.textContent = '0';
        console.log('hi');
        return;
    }

    if (playRound(playerSelection, computerPlay()) === 1) { // 1 means player won
        winner.textContent = '';
        playerScore.textContent++;
    } else if (playRound(playerSelection, computerPlay()) === 0) { // 0 means computer won, dont keep track of ties
        winner.textContent = '';
        computerScore.textContent++;
    } else{
        winner.textContent = 'Tie!'
    }
    if (playerScore.textContent === '5') {
        winner.textContent = "You won!";
    } else if (computerScore.textContent === '5') {
        winner.textContent = 'You lose!';

    }
}



const buttons = document.querySelectorAll('input');
buttons.forEach((button) => {
    button.addEventListener('click', () => game(button.id))
});
