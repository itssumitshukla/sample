let button = document.querySelector('.get-jokes');

button.addEventListener('click', getJokes);

function getJokes(e) {
  let number = document.querySelector('input[type="number"]').value;

  //XHR
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number.value}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      let response = JSON.parse(this.responseText);
      let output = '';
      if (response.type === 'success') {

        // Check if Array 
        if (Array.isArray(response.value)) {
          // Is Array
          response.value.forEach(function (joke) {
            output += `<li>${joke.joke}</li>`;
          });
        } else if(response.value.hasOwnProperty('joke')){
            // Is an object and has a property of joke.
            output += `<li>${response.value.joke}</li>`;
        } else {
          // something bad happened.
            output += '<li>Something Went wrong>/li>';
        }
      }
      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();
  number.value = '';
  e.preventDefault();
}