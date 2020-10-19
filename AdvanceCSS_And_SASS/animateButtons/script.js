
let btn = document.getElementById('btn');
let cards = document.getElementById('here');
let yay = 'TEST';

btn.addEventListener('click', function(){
  cards.classList.toggle("d-block");
//   cards = `<div class="card-body">
//   <h5 class="card-title">${yay}</h5>
//   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
// </div>`
  console.log('YAY')
})