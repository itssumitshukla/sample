
let form  = document.querySelector('#searchForm');
form.addEventListener('submit', function(e){
  e.preventDefault();
  let searchTerm = form.elements.query.value;
  
  console.dir(this)
})

