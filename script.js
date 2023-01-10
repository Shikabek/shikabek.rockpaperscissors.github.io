let computerSelection = getComputerChoise()
let x = prompt("Enter your variant")
let playerSelection = x[0].toUpperCase() + x.slice(1).toLowerCase()

function getComputerChoise (){
    let chance = Math.floor(Math.random() * 3);
    if (chance == 0) {
        return 'Rock';
    }else if (chance == 1) {
        return 'Paper';
    }else {
        return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'It`s a tie!'
    }else if (
        playerSelection == 'Rock' && computerSelection == 'Scissors' ||
        playerSelection == 'Paper' && computerSelection == 'Rock' ||
        playerSelection == 'Scissors' && computerSelection == 'Paper' 
    ) {
        return 'User wins round'
    }else if(
        computerSelection == 'Rock' && playerSelection == 'Scissors' ||
        computerSelection == 'Paper' && playerSelection == 'Rock' ||
        computerSelection == 'Scissors' && playerSelection == 'Paper'
    ){
        return 'Computer wins round'
    }
}

console.log(playRound(playerSelection,computerSelection))
console.log(computerSelection)