//Create class
class Weather {
  constructor(city, state){
    this.apiKey = 'Z8d8GaWFdjebaHfWgE9t520BlGHkbKtp';
    this.city = city;
    this.state = state;
  }
  //fetch weather from api
  async getWeather(){
    let response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.apiKey}&q=${this.city}`);

    let responseData = await response.json();

    return responseData;
  }

  //Change weather location
  changeLocation(city, state){
    this.city = city,
    this.state = state
  }
}