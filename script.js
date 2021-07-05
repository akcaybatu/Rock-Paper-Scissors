let computerScore = 0;
let playerScore = 0;

const scoreHuman = document.getElementById('scoreHuman');
const scoreComputer = document.getElementById('scoreComputer');

function computerPlay(){
    let computerRPS = ["Rock", "Paper", "Scissors"];
    return computerRPS[Math.floor(Math.random() * 3)];
}


const buttons = document.querySelectorAll("#buttons > button");
buttons.forEach((button) => {
    button.addEventListener('click', function(e){
        let playerSelection = e.target;
        let computerSelection = e.target;
        playRound(playerSelection, computerSelection);
    });       
});


function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    const rock = buttons[0];
    const paper = buttons[1];
    const scissors = buttons[2];
    const round = document.getElementById('round');
    if ((playerSelection == rock && computerSelection == "Scissors") || 
        (playerSelection == paper && computerSelection == "Rock") || 
        (playerSelection == scissors && computerSelection == "Paper")) 
    {
        round.textContent = "You Win";
    }
    else if ((playerSelection == rock && computerSelection == "Paper") || 
             (playerSelection == paper && computerSelection == "Scissors") || 
             (playerSelection == scissors && computerSelection == "Rock"))
    {
        round.textContent = "You Lose";
    }
    else{
        round.textContent = "Tie";
    }
    game();
}

game = () =>{
    if (round.textContent = "You Win") {
        scoreHuman.textContent = playerScore + 1;
    }
    else if (round.textContent = "You Lose") {
        scoreComputer.textContent = computerScore + 1;
    }    
}
