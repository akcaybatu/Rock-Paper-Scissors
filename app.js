let computerScore = 0;
let playerScore = 0;

const round = document.getElementById('round');
const instantScorePlayer = document.getElementById('instantScorePlayer');
const instantScoreComputer = document.getElementById('instantScoreComputer');

// Computer random pick function
function computerPlay(){
    let computerRPS = ["Rock", "Paper", "Scissors"];
    return computerRPS[Math.floor(Math.random() * 3)];
}

// Onclick, players choice function
const buttons = document.querySelectorAll("#buttons > div > input");
buttons.forEach((input) => {
    input.addEventListener('click', function(e){
        let playerSelection = e.target;
        let computerSelection = e.target;
        playRound(playerSelection, computerSelection);
    });       
});

// Check the computers choice and players choice
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    const rock = buttons[0];
    const paper = buttons[1];
    const scissors = buttons[2];
    if ((playerSelection == rock && computerSelection == "Scissors") || 
        (playerSelection == paper && computerSelection == "Rock") || 
        (playerSelection == scissors && computerSelection == "Paper")) 
    {
        round.textContent = "You Win";
        playerScore++;
        instantScoreHuman.textContent = "You: " + playerScore;
    }
    else if ((playerSelection == rock && computerSelection == "Paper") || 
             (playerSelection == paper && computerSelection == "Scissors") || 
             (playerSelection == scissors && computerSelection == "Rock"))
    {
        round.textContent = "You Lose";
        computerScore++;
        instantScoreComputer.textContent = "Computer: " + computerScore;
    }
    else{
        round.textContent = "Draw";
    }
    game();
}

// Check final score and stop game
game = () => {
    if (playerScore == 5) {
        round.textContent = "You win the game. Congrats!";
        playerScore = 0;
        computerScore = 0;
        instantScoreComputer.textContent = "Computer: ";
        instantScoreHuman.textContent = "You: ";
    }
    else if (computerScore == 5) {
        round.textContent = "Oh no, computer wins...";
        playerScore = 0;
        computerScore = 0;
        instantScoreComputer.textContent = "Computer: ";
        instantScoreHuman.textContent = "You: ";
    }
}
