
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let photosArray = [];
const count = 10;
const apiKey = API_KEY;
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


//create elements for links and photos and add it to dom
function displayPhotos(){
  photosArray.forEach((photo)=>{
    //Create ancho to unsplash
    const item = document.createElement('a');
    item.setAttribute('href', photo.links.html);
    item.setAttribute('target', "_blank");
    //create imate
    const img = document.createElement('img');
    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt', photo.alt_description);
    img.setAttribute('title', photo.alt_description);
    //put image in anchor and in image element
    item.appendChild(img);
    imageContainer.appendChild(item);
   });
}

//Get photos from Unslpash API 
async function getPhotos(){
  try {
    const response = await fetch(apiURL);
    photosArray= await response.json();
    displayPhotos();
  } catch (err) {
    //Catch error
  }
}

getPhotos();