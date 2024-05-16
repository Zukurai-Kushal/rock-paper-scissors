
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

function getHumanChoice(){
    let choice;
    while(true){
        choice = prompt("Rock, Paper or Scissors?");
        choice = choice.toLowerCase();
        if(choice == "rock" || choice == "paper" || choice == "scissors" ) break;
        else alert("Invalid input, please try again!");            
    }
    return choice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice){
        switch(humanChoice){
            case "rock":
                if(computerChoice == "rock"){
                    console.log("It's a draw!");
                }
                else if(computerChoice == "paper"){
                    console.log("You Lose! Paper beats Rock");
                    computerScore++;
                }
                else if(computerChoice == "scissors"){
                    console.log("You Win! Rock beats Scissors");
                    humanScore++;
                }
                break;
            case "paper":
                if(computerChoice == "rock"){
                    console.log("You Win! Paper beats Rock");
                    humanScore++;
                }
                else if(computerChoice == "paper"){
                    console.log("It's a draw!");
                    
                }
                else if(computerChoice == "scissors"){
                    console.log("You Lose! Scissors beats Paper");
                    computerScore++;
                }
                break;
            case "scissors":
                if(computerChoice == "rock"){
                    console.log("You Lose! Rock beats Scissors");
                    computerScore++;
                }
                else if(computerChoice == "paper"){
                    console.log("You Win! Scissors beats Paper");
                    humanScore++;
                }
                else if(computerChoice == "scissors"){
                    console.log("It's a draw!");
                }
                break;
        }
    }

    for(let i=0; i<5; i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
    console.log("Your Score: "+humanScore+"     Computer Score: "+computerScore);
    console.log(humanScore > computerScore? "Winner!":"Game Over!");
}
