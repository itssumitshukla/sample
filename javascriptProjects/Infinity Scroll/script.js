
//Require
require('dotenv').config();

//https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
const count = 10;
const apiKey = process.env.API_KEY;
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Get photos from Unslpash API 