function computerPlay(){
    let computerRPS = ["Rock", "Paper", "Scissors"];
    let computerRandom = Math.floor(Math.random() * 3);
    return computerRPS[computerRandom];
}

function playRound(playerSelection = prompt("Pick One!"), computerSelection = computerPlay()) {
    if ((playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") || (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") || (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper")){
        return "You Win!";
    }
    else if ((playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") || (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") || (playerSelection == "scissors" && computerSelection == "Rock")){
        return "You Lose!";
    }
    else if ((playerSelection.toLowerCase() == "rock" && computerSelection == "Rock") || (playerSelection.toLowerCase() == "paper" && computerSelection == "Paper") || (playerSelection == "scissors" && computerSelection == "Scissors")){
        return "It's a Draw";
    }
    else if (playerSelection = ""){
        return "You didn't make a select";
    }
    else{
        return "Wrong word";
    }
}

function game(){
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
}
game();
