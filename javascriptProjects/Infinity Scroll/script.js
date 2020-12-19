
//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
const count = 10;
//process.env.API_KEY; 
const apiKey = API_KEY;
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Get photos from Unslpash API 
async function getPhotos(){
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    //Catch error
  }
}

getPhotos();