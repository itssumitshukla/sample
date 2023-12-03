'use strict'

//initial
let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');

let diceEl = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

let scores = [0 , 0];
let currentScore = 0;
let activePlayer = 0; 
let playing;

//Starting codition
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

const switchPlayer = function(){
        //switch to next player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
};

//Rolling dice function
btnRoll.addEventListener('click', function(){
    let dice = Math.trunc(Math.random() * 6) + 1;
    //display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //check for roll one
    if(dice !== 1){
        //Add dice to current store
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer()
    }
});

//btn hold
btnHold.addEventListener('click', function () {
//Add current score to active players score
scores[activePlayer] += currentScore;
switchPlayer()
});