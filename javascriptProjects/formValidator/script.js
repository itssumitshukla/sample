const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');
let isValid = false;

function validateForm() {
  //Title
  isValid = form.checkValidity();
  //Style
  message.textContent = 'Please fill out all Fields!';
  message.style.color = 'red';
  messageContainer.style.borderColor = 'red';
}

function processFormData(e) {
  e.preventDefault();

  //Method
  validateForm();
}

//Event Listners
form.addEventListener('submit', processFormData);