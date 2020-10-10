//
let firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function(){
  console.log('IT WORKED')
  let dataBack = JSON.parse(this.responseText);
  console.log(dataBack)
});

//error
firstReq.addEventListener('error', ()=>{
  console.log('ERROR!!!!!')
});

firstReq.open('GET', 'https://swapi.dev/api/planets/1/');
firstReq.send();
// console.log(firstReq)
