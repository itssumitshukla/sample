const forma = document.querySelector("#username");
let h1g =  document.querySelector('h1');

forma.addEventListener('input', function (e) {
  if(forma.value === ''){
     h1g.innerText = 'Enter Your Username'
  } else {
     h1g.innerText = `Welcome, ${forma.value}`
  }
   
});
