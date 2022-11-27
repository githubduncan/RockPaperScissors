function getComputerChoice () {
    let arr = ["Rock", "Paper", "Scissors"]
    let rand = Math.floor(Math.random()*3)
    return arr [rand]
}

let playerScore = 0;
let computerScore = 0;
const results = document.querySelector('.results')

function playRound(playerSelection, computerSelection) {
    
    
    let choice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (choice == computerSelection) {
        results.innerText = "It is a tie"   
    } else if (choice == "Rock" && computerSelection == "Paper") {
        results.innerText = "You lose, paper beats rock"
        computerScore++
    } else if (choice =="Rock" && computerSelection == "Scissors") {
        results.innerText= "You win,Rock beats scissors"
        playerScore++
    } else if (choice == "Paper" && computerSelection == "Rock") {
        results.innerText="You win, Paper beats rock"
        playerScore++
    } else if (choice == "Paper" && computerSelection == "Scissors") {
        results.innerText="You lose, scissors beats paper"
        computerScore++
    } else if (choice == "Scissors" && computerSelection == "Rock") {
        results.innerText="You lose,rock beats scissors"
        computerScore++
    } else if (choice == "Scissors" && computerSelection == "Paper") {
        results.innerText="You win, scissors beat paper"
        playerScore++
    } else {
        ("Error, please enter a valid input")
    }
    
    }

    const rock = document.getElementById("rock")
    rock.addEventListener('click', function () {
        playRound("Rock",getComputerChoice())
    })

    const paper = document.getElementById("paper")
    paper.addEventListener('click', function () {
        playRound("Paper",getComputerChoice())
    })

    const scissors = document.getElementById("scissors")
    scissors.addEventListener('click', function () {
        playRound("scissors",getComputerChoice())
    })