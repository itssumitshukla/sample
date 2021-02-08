let button = document.querySelector('.get-jokes');

button.addEventListener('click', getJokes);

function getJokes(e){
  let number = document.querySelector('input[type="number"]').value;

  //XHR
  let xhr = new XMLHttpRequest();
  xhr.open('GET',`http://api.icndb.com/jokes/random/${number.value}`, true);
  
  xhr.onload = function(){
    if(this.status === 200) {
      let response = this.responseText;
      console.log(response);
    }
  }

  xhr.send();
  
  console.log('Yo' + number);
  e.preventDefault();
}
