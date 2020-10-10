//
let firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', ()=>{
  console.log('IT WORKED')
});

//error
firstReq.addEventListener('error', ()=>{
  console.log('ERROR!!!!!')
});

firstReq.open('GET', 'https://swapi.dev/api/planets/1/');
firstReq.send();
console.log('Request')
