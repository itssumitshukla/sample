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
    gameOver(true, `${winningNum} is correct, YOU WIN!!`);
  } else {
    //Wrong Number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      //Game over --Lost
      gameOver(false, `Game Over, you lost! the correct number was ${winningNum}`);
    } else {
      //Clear Input
      guessInput.value = '';
      //Game continues-- answer wrong
      guessInput.style.borderColor = 'red';
      setMessage(`${guess} is not correct, you have ${guessesLeft} guesses left`, 'red')
    }
  }
});

//Game over function
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  //Disable input
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  message.style.color = color;
  //Set message
  setMessage(msg);

  //Play again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
};

//Set Message Function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
};