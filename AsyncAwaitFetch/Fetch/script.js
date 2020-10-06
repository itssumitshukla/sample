let button = document.querySelector('button');
let divDiv = document.getElementById('here');
let url = 'https://swapi.dev/api/people/';

button.addEventListener('click', function () {
  fetch(url)
    .then(response => response.json()) // convert to json
    .then(data => {
      for (let ii of data.results) {
        divDiv.style.display = 'block';
        divDiv.innerHTML += `<strong>${ii.name}</strong> was born in ${ii.birth_year}! <br>`;
      }

    }) //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors
});