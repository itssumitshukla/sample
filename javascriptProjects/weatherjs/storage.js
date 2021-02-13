//Set storage
class Storage {
  constructor(){
    this.city;
    this.state;
    this.defaultCity = 'Honolulu';
    this.defaultState = "HI";
  }
  //Get Location
  getLocationData(){
    if(localStorage.getItem('city')=== null){
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }
    //State
    if(localStorage.getItem('state')=== null){
      this.state = this.defaultstate;
    } else {
      this.state = localStorage.getItem('state');
    }
    return {
      city: this.city,
      state: this.state
    }
  }
  //Set LocationData
  setLocationData(city, state){
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }
}