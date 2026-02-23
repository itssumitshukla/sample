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
  }
}

document.addEventListener("DOMContentLoaded", init);
