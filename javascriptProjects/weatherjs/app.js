//Init weather

let weather = new Weather('Honolulu');

//Get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results)
      //ui.paint(results);
    })
    .catch(err => console.log(err));
}