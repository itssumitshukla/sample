//API
const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'ec3a8c4d',
      s: searchTerm,
    }
  });

  if (response.data.Error) {
    return [];
  }

  return response.data.Search;
};

const root = document.querySelector('.autocomplete');
root.innerHTML = `
  <label><b>Search for a movie</b></label>
  <input class="input"/>
    <div class="dropdown">
      <div class="dropdown-menu">
        <div class="dropdown-content results">
        </div>
      </div>
    </div>
`;

const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultWrapper = document.querySelector('.results');


const onInput = async (event) => {
  const movies = await fetchData(event.target.value);

  if(!movies.length){
    dropdown.classList.remove('is-active');
  }

  resultWrapper.innerHTML = '';
  dropdown.classList.add("is-active");
  for (let movie of movies) {
    let option = document.createElement('a');
    const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;

    option.classList.add('dropdown-item');
    option.innerHTML = `
    <img src ="${movie.Poster}"  />
    ${movie.Title}
    `;

    option.addEventListener('click', ()=>{
      dropdown.classList.remove('is-active');
      input.value = movie.Title;

      onMovieSelect(movie);
    });

    resultWrapper.appendChild(option);
  }
};

input.addEventListener('input', debounce(onInput, 500));

//global event listner

document.addEventListener('click', (e)=>{
  if(!root.contains(e.target)){
    dropdown.classList.remove('is-active');
  }
  console.log(e.target);
});

//
const onMovieSelect = async (movie) =>{
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'ec3a8c4d',
      i: movie.imdbID
    }
  });
  console.log(response.data)
  document.querySelector('#summary').innerHTML = movieTemplate(response.data);
};

const movieTemplate = (movieDetail) => {
  return `
  <article class="media">
      <figure class="media-left">
        <p class="image">
          <img src="${movieDetail.Poster}" />
        </p>
      </figure>
  <div class="media-content">
    <div class="content">
      <h1>${movieDetail.Title}</h1>
      <h4>${movieDetail.Genre}</h1>
        <p>${movieDetail.Plot}</p>
    </div>
  </div>
</article>
<article class="notification is-primary">
  <p class="title">${movieDetail.Awards}</p>
  <p class="subtitle">Awards</p>
</article>
<article class="notification is-primary">
  <p class="title">${movieDetail.BoxOffice}</p>
  <p class="subtitle">BoxOffice</p>
</article>
<article class="notification is-primary">
  <p class="title">${movieDetail.Metascore}</p>
  <p class="subtitle">Metascore</p>
</article>
<article class="notification is-primary">
  <p class="title">${movieDetail.imdbRating}</p>
  <p class="subtitle">imdbRating</p>
</article>
<article class="notification is-primary">
  <p class="title">${movieDetail.imdbVotes}</p>
  <p class="subtitle">imdbVotes</p>
</article>
  `;
};