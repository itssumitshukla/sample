
const forma = document.querySelector("#username");
let h1g =  document.querySelector('h1');
let btn = document.querySelector('#btn');

forma.addEventListener('input', function (e) {
  if(forma.value === ''){
     h1g.innerText = 'Enter some Words to add'
  } else {
     h1g.innerText = `Welcome, you will be adding this to the list.... ${forma.value}`
  } 
});

btn.addEventListener('click', function (e) {
  e.preventDefault();
let lastCh = document.createElement('P');
lastCh.innerText = forma.value;
document.body.append(lastCh);
console.log(`${forma.value}`)
forma.value = '';
});

console.log(`${forma.value}`)