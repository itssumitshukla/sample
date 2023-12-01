'use strict'

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.close-modal');
let btnsOpenModal = document.querySelectorAll('.show-modal');


 let openModal = function () {
 modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    };
 let closeModal = function () {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
};


for(let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', function(){
        openModal();
})};


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//global keypress for escape
document.addEventListener('keydown', function (e) {
    if(e.key === 'Escape'&& (!modal.classList.contains('hidden'))){
            closeModal();
    }
})