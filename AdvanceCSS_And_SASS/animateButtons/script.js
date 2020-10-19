
let btn = document.getElementById('btn');
let cards = document.getElementById('here');

btn.addEventListener('click', function(){
  cards.classList.add("d-block");
  console.log('YAY')
})