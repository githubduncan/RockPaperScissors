function getComputerChoice () {
    let arr = ["Rock", "Paper", "Scissors"]
    let rand = Math.floor(Math.random()*3)
    return arr [rand]
}

function playRound(playerSelection, computerSelection) {
    
    let computerScore = 0
    let playerScore = 0
    let choice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (choice == computerSelection) {
        console.log("It is a tie")
    } else if (choice == "Rock" && computerSelection == "Paper") {
        console.log("You lose, paper beats rock")
        computerScore++
    } else if (choice =="Rock" && computerSelection == "Scissors") {
        console.log("You win,Rock beats scissors")
        playerScore++
    } else if (choice == "Paper" && computerSelection == "Rock") {
        console.log("You win, Paper beats rock")
        playerScore++
    } else if (choice == "Paper" && computerSelection == "Scissors") {
        console.log("You lose, scissors beats paper")
        computerScore++
    } else if (choice == "Scissors" && computerSelection == "Rock") {
        console.log("You lose,rock beats scissors") 
        computerScore++
    } else if (choice == "Scissors" && computerSelection == "Paper") {
        console.log("You win, scissors beat paper")
        playerScore++
    } else {
        ("Error, please enter a valid input")
    }
    
    }
  