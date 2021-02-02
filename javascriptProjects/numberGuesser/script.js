// Game Values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// UI Elements
let game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

//Assign UI min and Max
minNum.textContent = min;
maxNum.textContent = max;
//event listner
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);
  //Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  //Check if won
  if (guess === winningNum) {
    //Game over --Won
    //Disable input
    guessInput.disabled = true;
    guessInput.style.borderColor = 'green';
    //Set message
    setMessage(`${winningNum} is correct, YOU WIN!`, 'green');
  } else {
    //Wrong Number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      //Game over --Lost
      //Disable input
      guessInput.disabled = true;
      guessInput.style.borderColor = 'red';
      //Set message
      setMessage(`Game Over, you lost! the correct number was ${winningNum}`, 'green');
    } else {
      //Game continues-- answer wrong
    }
  }
});

//Set Message Function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
};