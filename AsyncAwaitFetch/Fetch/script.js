const button = document.querySelector('button');
const divDiv = document.getElementById('here');
let url = 'https://swapi.dev/api/people/';

button.addEventListener('click', function () {
  fetch(url)
    .then(response => response.json()) // convert to json
    .then(data => {
      for (let ii of data.results) {
        divDiv.innerHTML += ii.name;
        console.log(ii.name)
      }
      //divDiv.style.display = 'block';
    }) //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors
});