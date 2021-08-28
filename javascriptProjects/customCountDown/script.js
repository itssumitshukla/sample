const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');
const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;

//Set date input minimum
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

//Populate Countdown/Complete UI
function updateDOM() {
  const now = new Date().getTime();
  const distance = countdownValue - now;
}


//Take values from Form Input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(countdownDate, countdownTitle);
  //Get number version of date
  countdownValue = new Date(countdownDate).getTime();
  console.log('Countdown Value: ', countdownValue);
  updateDOM();
}

//Event Listner
countdownForm.addEventListener('submit', updateCountdown);