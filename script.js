const selectionButtons = document.querySelectorAll('[data-selection]')
const playerScore = document.getElementById('player-score')
const computerScore = document.getElementById('computer-score')
const options = ['rock', 'paper', 'scissors']


function computerPlay() {
 const random = options[Math.floor(Math.random() * options.length)]; 
 return random
}


selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
  const playerSelected = selectionButton.dataset.selection
  const computerSelected = computerPlay()
  console.log ("Player Selection:" + playerSelected)
  console.log("Computer Selection:" + computerSelected)
  playRound(playerSelected, computerSelected)
  const playerWin = playerScore.innerHTML
  const computerWin = computerScore.innerHTML
  winner(playerWin, computerWin)
  endGame(playerWin, computerWin)
  })
})

function play5Rounds () {
  
}


function playRound(playerSelected, computerSelected) {
  if (playerSelected == 'rock' && computerSelected == 'rock' ||
      playerSelected == 'paper' && computerSelected == 'paper' ||
      playerSelected == 'scissors' && computerSelected == 'scissors') {
  }
  else if (playerSelected == 'rock' && computerSelected == 'scissors' ||
          playerSelected == 'paper' && computerSelected == 'rock' ||
          playerSelected == 'scissors' && computerSelected == 'paper') {
            for(let i = 0; i < 1; i++) {
            playerScore.innerHTML++ 
            }            
  }
  else {
    for(let i = 0; i < 1; i++) {
      computerScore.innerHTML++
    }
  }
}

function winner (playerWin, computerWin) {
  if (playerWin == 5) {
    alert('you win')
  }
  else if (computerWin == 5) {
    alert('computer win')
  }
}

function endGame (playerWin, computerWin) {
  if (playerWin == 5 || computerWin == 5 ) {
    playerScore.innerHTML = 0
    computerScore.innerHTML = 0
  }
  else {
  }
}