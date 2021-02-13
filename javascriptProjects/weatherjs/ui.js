//Create UI class
class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelslike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = (Math.floor((weather.main.temp - 273.15) * 9/5 + 32)) + ' °F';
    this.icon.setAttribute(
      'src',
      `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    );
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.feelslike.textContent = `Feels Like: ${(Math.floor((weather.main.feels_like - 273.15) * 9/5 + 32))} °F`;
    this.dewpoint.textContent = `Wind Speed: ${Math.floor(weather.wind.speed)} mph`;
    this.wind.textContent = `Wind Speed: ${Math.floor((weather.wind.speed) * 2.237)} mph`;
  }
}