const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

//Song titles
const songs = ["hey", "summer", "ukelele"];

//Keep track of songs
let songIndex = 2;

//Initially load song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
}
