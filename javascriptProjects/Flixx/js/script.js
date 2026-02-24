// import { API_KEY } from "./apiKey";

let API_KEY = "64061878510081ecab456354a7a90512";

const global = {
  currentPage: window.location.pathname,
};

async function displayPopularMovies() {
  const result = await fetchAPIData("movie/popular");
  console.log(result);
}

//Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  const API_URL = "https://api.themoviedb.org/3/";
  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=em-US`,
  );
  const data = await response.json();
  return data;
}

//Highlight active link
function highlightActiveLink() {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    if (link.getAttribute("href") === global.currentPage) {
      link.classList.add("active");
    }
  });
}

//Init App
function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      displayPopularMovies();
      console.log("Home");
      break;
    case "/shows.html":
      console.log("Shows");
      break;
    case "/movie-details.html":
      console.log("Movie Details");
      break;
    case "/tv-details.html":
      console.log("TV Details");
      break;
    case "/search.html":
      console.log("Search");
      break;
  }

  highlightActiveLink();
}

document.addEventListener("DOMContentLoaded", init);
