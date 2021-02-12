//Init weather

let weather = new Weather('Honolulu');

weather.getWeather()
  .then(results => {
    console.log(results)
  })
  .catch(err => console.log(err))
;
console.log()