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

let scores;
let currentScore = 0;
let activePlayer; 
let playing;

//Starting codition
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

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
        current0El.textContent = currentScore;
        console.log(currentScore)
    } else {
        //switch to next player
    }

});