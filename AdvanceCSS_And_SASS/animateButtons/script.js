let btn = document.getElementById('btn');
let cards = document.getElementById('here');
let url = 'https://swapi.dev/api/people/';

// btn.addEventListener('click', function() {
//       cards.classList.toggle("d-block");
//       fetch(url)
//         .then(response => response.json()) // convert to json
//         .then(data => {
//           for (let ii of data.results) {
//             cards.style.display = 'block';
//             // cards.innerHTML += `<strong>${ii.name}</strong> was born in ${ii.birth_year}! <br>`;
//             cards.innerHTML += `<h5 class="card-title">${ii.name}</h5>
//             <p class="card-text">born in ${ii.birth_year}! <br> </p>`;
//           }}) //print data to console
//          .catch(err => console.log('Request Failed', err)); // Catch errors
//           // });
//         });

//trying whole div
btn.addEventListener('click', function() {
      cards.classList.toggle("d-block");
      fetch(url)
        .then(response => response.json()) // convert to json
        .then(data => {
          for (let ii of data.results) {
            cards.style.display = 'block';
            // cards.innerHTML += `<strong>${ii.name}</strong> was born in ${ii.birth_year}! <br>`;
            cards.innerHTML += `<h5 class="card-title">${ii.name}</h5>
            <p class="card-text">born in ${ii.birth_year}! <br> </p>`;
          }}) //print data to console
         .catch(err => console.log('Request Failed', err)); // Catch errors
          // });
        });