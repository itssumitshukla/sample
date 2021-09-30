const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');
let isValid = false;
let passwordsMatch = false;

function validateForm() {
  //Title
  isValid = form.checkValidity();
  //Style
  if (!isValid) {
    message.textContent = 'Please fill out all Fields!';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }
  //Check if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
  } else {
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match!';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    return;
  }
  //If form is valid and passwords match
  if(isValid && passwordsMatch){
    message.textContent = 'Successfuly Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}

function processFormData(e) {
  e.preventDefault();

  //Method
  validateForm();
}

//Event Listners
form.addEventListener('submit', processFormData);