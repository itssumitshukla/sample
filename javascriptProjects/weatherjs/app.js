//Init UI/Storage
let ui = new UI();
let storage = new Storage();
let weatherLocation = storage.getLocationData();

//Init weather
let weather = new Weather(weatherLocation.city, weatherLocation.state);

//Get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('state').value;

  console.log(city, country)
  //change location
  weather.changeLocation(city, state)

  //set location in local storage
  storage.setLocationData(city, state)

  //get and display weather
  getWeather();

  //close modal
  $('#locModal').modal('hide');
})

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results);
      ui.paint(results)
    })
    .catch(err => console.log(err));
}