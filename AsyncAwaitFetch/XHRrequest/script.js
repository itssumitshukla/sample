//
let firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function(){
  console.log('IT WORKED')
  let dataBack = JSON.parse(this.responseText);
  //Chaining requests
  let filmUrl = dataBack.results[0].films[0];
  let filmReq = new XMLHttpRequest();
  filmReq.addEventListener('load', function(){
    console.log(this)
  });

  filmReq.addEventListener('error', ()=>{
    console.log('ERROR!!!!!')
  });

  //Looping over the result and getting just the name of the planets
  // for(let tt of dataBack.results){
  //   console.log(tt.name);
  // }
  console.log(dataBack)
});

//error
firstReq.addEventListener('error', ()=>{
  console.log('ERROR!!!!!')
});

firstReq.open('GET', 'https://swapi.dev/api/planets/');
firstReq.send();
// console.log(firstReq)
