
const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//promst to select media stream, pass to video then play

async function selectMediaStream(){
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = ()=>{
      videoElement.play();
    }
  } catch (err) {
    console.log('Whoops error here: ', err);
  }
}

button.addEventListener('click', async ()=>{
  //Disable
  button.disabled = true;
  //start pic in pic
  await videoElement.requestPictureInPicture();
  //reset the button
  button.disabled = false;
});

//onload
selectMediaStream();