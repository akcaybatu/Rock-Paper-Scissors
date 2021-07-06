let computerScore = 0;
let playerScore = 0;

const round = document.getElementById('round');
const scoreHuman = document.getElementById('scoreHuman');
const scoreComputer = document.getElementById('scoreComputer');

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
        scoreHuman.textContent = "Human: " + playerScore;
    }
    else if ((playerSelection == rock && computerSelection == "Paper") || 
             (playerSelection == paper && computerSelection == "Scissors") || 
             (playerSelection == scissors && computerSelection == "Rock"))
    {
        round.textContent = "You Lose";
        computerScore++;
        scoreComputer.textContent = "Computer: " + computerScore;
    }
    else{
        round.textContent = "Tie";
    }
    game();
}

// Check final score and stop game
game = () => {
    if (playerScore == 5) {
        round.textContent = "You win the game. Congrats!";
        playerScore = 0;
        computerScore = 0;
        scoreComputer.textContent = "Computer: ";
        scoreHuman.textContent = "Human: ";
    }
    else if (computerScore == 5) {
        round.textContent = "Oh no, computer wins...";
        playerScore = 0;
        computerScore = 0;
        scoreComputer.textContent = "Computer: ";
        scoreHuman.textContent = "Human: ";
    }
}
