const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');
const resultText = document.getElementById('resultText');

const choices = {
  rock: {
    name: 'Rock',
    defeats: ['scissors', 'lizard']
  },
  paper: {
    name: 'Paper',
    defeats: ['rock', 'spock']
  },
  scissors: {
    name: 'Scissors',
    defeats: ['paper', 'lizard']
  },
  lizard: {
    name: 'Lizard',
    defeats: ['paper', 'spock']
  },
  spock: {
    name: 'Spock',
    defeats: ['scissors', 'rock']
  },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

//Passing player selected
function select(playerChoice) {
  //Add selected styling and playerchoice
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Spock';
      break;
  }
}