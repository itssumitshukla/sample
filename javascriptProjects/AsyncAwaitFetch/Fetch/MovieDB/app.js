let form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
  e.preventDefault();
  let searchTerm = form.elements.query.value;
  let res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
  makeImages(res.data);
});


let makeImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      let img = document.createElement('IMG');
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
}