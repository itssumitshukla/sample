const apiKey = env.API_KEY;

const global = {
  currentPage: window.location.pathname,
};

//Init App
function init() {
  switch (global.currentPage) {
    case "/":
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
}

document.addEventListener("DOMContentLoaded", init);
