function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)
    if (choice == 0) {
        return 'Rock'
    }else if (choice == 1){
        return 'Paper'
    }else {
        return 'Scissors'
    }
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Tie!'
    }else if (
        playerSelection == 'Rock' && computerSelection == 'Scissors' ||
        playerSelection == 'Paper' && computerSelection == 'Rock' ||
        playerSelection == 'Scissors' && computerSelection == 'Paper' 
    ) {
        return 'Player'
    }else {
        return 'Computer'
    }
}

function playRound(playerSelection, computerSelection) {
    const winner = checkWinner(playerSelection, computerSelection)
    if(winner == "Tie!"){
        return "It's a Tie!"
    }
    else if(winner == "Player"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function game() {
    let scorePlayer = 0
    let scoreComputer = 0
    console.log('Welcome')
    for(let i=0;i<5;i++) {
        let x = prompt("Enter your variant")
        let playerSelection = x[0].toUpperCase() + x.slice(1).toLowerCase()
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection,computerSelection))
        if(checkWinner(playerSelection, computerSelection) == 'Player') {
            scorePlayer++
        }else if (checkWinner(playerSelection, computerSelection) == 'Computer') {
            scoreComputer++
        }
    }
    console.log('Game Over')
    if(scorePlayer > scoreComputer) {
        console.log('User won the game')
        console.log(`Final score: user - ${scorePlayer} vs. comp - ${scoreComputer}`)
    }else if (scorePlayer < scoreComputer) {
        console.log('Comp won the game')
        console.log(`Final score: comp - ${scoreComputer} vs. user - ${scorePlayer}`)
    }else {
        console.log('A tie!')
        console.log(`Final score: user - ${scorePlayer} vs. comp - ${scoreComputer}`)
    }
}
game()  