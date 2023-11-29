'use strict'

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btn = document.querySelector('.close-modal');
let btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

for(let i = 0; i < btnsOpenModal.length; i++){
    console.log(btnsOpenModal[i].textContent);
}