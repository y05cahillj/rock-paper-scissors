//we're picking out elements with certain HTML IDs to create variables
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button') // we're picking out everything that is a button (selecting all / everything in that element)
const userScoreDisplay = document.getElementById('userScoreDisplay')
const computerScoreDisplay = document.getElementById('computerScoreDisplay')
const winnerDisplay = document.getElementById('winnerDisplay')


//creating empty variables that are then filled in when the below functions run
let userChoice
let computerChoice
let result
let userScore = 0
let computerScore = 0 
let winner

//for each choice, we want to add event listeners to listen for a click, so when we clik a button, we want something to happen. Whatever we click, we want to get the ID and then save it as a user choice (but make it gobal so we can access it wherever we are)
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

//creating a function that generates a random number, and then applying that number (1-3) to either rock, paper or scissors
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice //innterHTML then adds text to a certain HTML element. In this case it's a span
}

//creating a function that returns a win, draw or lose based on what the player selects, then displaying this result
function getResult() {
  if (computerChoice === userChoice) {
    result = 'Its a draw!'
    computerScore
    userScore
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'You win!'
    ++userScore
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'You lost!'
    ++computerScore
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'You win!'
    ++userScore
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'You lose!'
    ++computerScore
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'You win!'
    ++userScore
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'You lose!'
    ++computerScore
  }
  if (userScore>=5) {
    winner = "You won the entire game! Keep playing if you want..."
  }
  else if (computerScore>=5) {
    winner = "You lost the entire game! Maybe you can be the first to 10?..."
  }

  
  else winner = "Who's going to win?"


  resultDisplay.innerHTML = result
  userScoreDisplay.innerHTML = userScore
  computerScoreDisplay.innerHTML = computerScore
  winnerDisplay.innerHTML = winner




}

