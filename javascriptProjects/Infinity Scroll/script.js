
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];
const count = 30;
const apiKey = API_KEY;
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Check if all images were loading
function imageloaded(){
  imagesLoaded++;
  if(imagesLoaded === totalImages){
    ready = true;
    loader.hidden = true;
  }
}



//helper function
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}


//create elements for links and photos and add it to dom
function displayPhotos(){
  imagesLoaded = 0;
  totalImages = photosArray.length;
  console.log('Total images ===', totalImages);
  photosArray.forEach((photo)=>{
    //Create ancho to unsplash
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });
    //create image
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    //Event listener, check when each is finished loading
    img.addEventListener('load', imageloaded);
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

//Check to see if scrolling near bottom of page, then load more pics
window.addEventListener('scroll', ()=>{
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
    ready = false;
    getPhotos();
  }
})


//on load
getPhotos();