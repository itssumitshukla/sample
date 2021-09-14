const video = document.querySelector('video');
const progressRange = document.querySelector('.progress-range');
const progressBar = document.querySelector('.progress-bar');
const playBtn = document.getElementById('play-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeRange = document.querySelector('.volume-range');
const volumeBar = document.querySelector('.volume-bar');
const currentTime = document.querySelector('.time-elapsed');
const duration = document.querySelector('.time-duration');
const fullscreenBtn = document.querySelector('.fullscreen');

//{Play or paused

function showPlayIcon() {
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'play');
};

function togglePlay() {
  if (video.paused) {
    video.play();
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'pause');
  } else {
    video.pause();
    showPlayIcon();
  }
};

//On video End, Show play button icon
video.addEventListener('ended', showPlayIcon);

//Event Listners
playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);