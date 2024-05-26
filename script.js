let round = 0;
let playerScore = 0;
let computerScore = 0;

const msg = document.querySelector("#msg");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const roundDisplay = document.querySelector("#round");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");    
const scissorsButton = document.querySelector("#scissors");
const playButtons = [rockButton, paperButton, scissorsButton];

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0){
        return "rock";
    }
    else if (choice == 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(playerChoice, computerChoice){
    switch(playerChoice){
        case "rock":
            if(computerChoice == "rock"){
                msg.textContent = ("It's a draw! \nRock vs Rock");
                playerScore+=0.5;
                computerScore+=0.5;
            }
            else if(computerChoice == "paper"){
                msg.textContent = ("You Lose!\n Rock vs Paper");
                computerScore++;
            }
            else if(computerChoice == "scissors"){
                msg.textContent = ("You Win!\n Rock vs Scissors");
                playerScore++;
            }
            break;
        case "paper":
            if(computerChoice == "rock"){
                msg.textContent = ("You Win!\n Paper vs Rock");
                playerScore++;
            }
            else if(computerChoice == "paper"){
                msg.textContent = ("It's a draw!\n Paper vs Paper");
                playerScore+=0.5;
                computerScore+=0.5;
                
            }
            else if(computerChoice == "scissors"){
                msg.textContent = ("You Lose!\n Paper vs Scissors");
                computerScore++;
            }
            break;
        case "scissors":
            if(computerChoice == "rock"){
                msg.textContent = ("You Lose!\n Scissors vs Rock");
                computerScore++;
            }
            else if(computerChoice == "paper"){
                msg.textContent = ("You Win!\n Scissors vs Paper");
                playerScore++;
            }
            else if(computerChoice == "scissors"){
                msg.textContent = ("It's a draw!\n Scissors vs Scissors");
                playerScore+=0.5;
                computerScore+=0.5;
            }
            break;
        default:
            alert("ERROR");
    }

    round++;
    roundDisplay.textContent = `Round ${round}`;
    playerScoreDisplay.textContent = playerScore.toString();
    computerScoreDisplay.textContent = computerScore.toString();

    if(playerScore >= 5 || computerScore >= 5){
        msg.textContent = (playerScore>computerScore)? "Winner!" : "Game Over!";
        round = 0;
        playerScore = 0;
        computerScore = 0;
    }

}

for (const button of playButtons){
    button.addEventListener("click", ()=>{
        playRound(button.id,getComputerChoice())
    });
}

