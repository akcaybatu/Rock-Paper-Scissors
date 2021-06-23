function computerPlay(){
    let computerRPS = ["Rock", "Paper", "Scissors"];
    return computerRPS[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection = prompt("Pick One!"), computerSelection = computerPlay()) {
    playerSelection.toLowerCase();
    if ((playerSelection == "rock" && computerSelection == "Scissors") || 
        (playerSelection == "paper" && computerSelection == "Rock") || 
        (playerSelection == "scissors" && computerSelection == "Paper")) 
    {
        return "You Win!";
    }
    else if ((playerSelection == "rock" && computerSelection == "Paper") || 
             (playerSelection == "paper" && computerSelection == "Scissors") || 
             (playerSelection == "scissors" && computerSelection == "Rock"))
    {
        return "You Lose!";
    }
    else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return "It's a Draw";
    }
    else{
        return "Please pick Rock, Paper or Scissors.";
    }
}

game = () =>{
    for (let index = 0; index < 5; index++) {
        console.log(playRound());       
    }
}
game();
