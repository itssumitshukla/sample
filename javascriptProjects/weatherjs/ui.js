//Create UI class
class UI{
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
  }

  paint(weather){
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather;
    this.string.textContent = weather.temperatture_string;
    this.icon.setAttribute('src', weather.icon_url);
  }
}