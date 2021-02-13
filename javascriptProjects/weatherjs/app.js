//Init UI
let ui = new UI();

//Init weather
let weather = new Weather('Honolulu');

//Get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', e => {
  const city = document.getElementById('city').value
  const country = document.getElementById('country').value

  //change location
  weather.changeLocation(city, country)

  //set location in local storage
  storage.setLocationData(city, country)

  //get and display weather
  getWeather()

  //close modal
  $('#locModal').modal('hide')
})

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results);
      ui.paint(results)
    })
    .catch(err => console.log(err));
}