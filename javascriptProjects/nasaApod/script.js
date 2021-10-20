const resultsNav = document.getElementById('resultsNav');
const favoritesNav = document.getElementById('favoritesNav');
const imagesContainer = document.querySelector('.images-container');
const saveConfirmed = document.querySelector('.save-confirmed');
const loader = document.querySelector('.loader');

//Nasa API
const count = 10;
const apiKey = 'DEMO_KEY';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

//Update DOM
function updateDOM() {
  resultsArray.forEach((result) => {
    //Card COntainer
    const card = document.createElement('div');
    card.classList.add('card');
    //Link
    const link = document.createElement('a');
    link.href = result.hdurl;
    link.title = 'View Full Image';
    link.target = '_blank';
    //Image
    const image = document.createElement('img');
    image.src = result.url;
    image.alt = 'Nasa Picture of the day';
    image.loading = 'lazy';
    image.classList.add('card-img-top');
  })
}

//Get 10 images from Nasa Api
async function getNasaPictures() {
  try {
    const response = await fetch(apiUrl);
    resultsArray = await response.json();
    console.log(resultsArray);
    updateDOM();
  } catch (error) {
    //
    console.log(error)
  }

}

//on Load
getNasaPictures();