function getComputerChoise (){
    let chance = Math.floor(Math.random() * 3);
    if (chance == 0) {
        return 'rock';
    }else if (chance == 1) {
        return 'paper';
    }else {
        return 'scissors'
    }
}

let computerSelection = getComputerChoise()
let x = prompt("Enter your variant")
let playerSelection = x.slice(0).toLowerCase()

function singleRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'Player wins this round!';
    }else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'Computer wins this round!';
    }else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'It`s a tie!'
    }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'Player wins this round!';
    }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'Computer wins this round!';
    }else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'It`s a tie!'
    }else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'Player wins this round!';
    }else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'Computer wins this round!';
    }else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'It`s a tie!'
    }
}

