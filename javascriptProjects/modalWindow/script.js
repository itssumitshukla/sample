'use strict'

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.close-modal');
let btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

for(let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', function(){
        console.log('BUTTON CLICKED');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
};

btnCloseModal.addEventListener('click', function () {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
});