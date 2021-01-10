//New autocomplete
const autoCompelteConfig = {
  renderOption(movie){
    const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster;

    return `
    <img src ="${movie.Poster}"  />
    ${movie.Title} (${movie.Year})
    `;
  },
  inputValue(movie){
    document.querySelector('.tutorial').classList.add('is-hidden');
    return movie.Title;
  },

  async fetchData(searchTerm) {
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
  }
};

//Calling createautocomplete from js
createAutoComplete({
  ...autoCompelteConfig,
  root: document.querySelector('#left-autocomplete'),
  onOptionSelect(movie){
    onMovieSelect(movie, document.querySelector('#left-summary'),'left');
  },
});
//Calling createautocomplete from js
createAutoComplete({
  ...autoCompelteConfig,
  root: document.querySelector('#right-autocomplete'),
  onOptionSelect(movie){
    onMovieSelect(movie, document.querySelector('#right-summary'),'right');
  },
});

let leftMovie;
let rightMovie;

//
const onMovieSelect = async (movie, summaryElement, side) =>{
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'ec3a8c4d',
      i: movie.imdbID
    }
  });
  summaryElement.innerHTML = movieTemplate(response.data);

    if(side === 'left'){
      leftMovie = response.data;
    } else {
      rightMovie = response.data;
    }
    if(leftMovie && rightMovie){
      runComparison();
    }
};

const  runComparison = () => {
  console.log('Time for comparison')
};

const movieTemplate = (movieDetail) => {
  const dollars = parseInt(movieDetail.BoxOffice.replace(/\$/g, '').replace(/,/g, ''));
  const metascore = parseInt(movieDetail.Metascore);
  const imdbScore = parseFloat(movieDetail.imdbRating);
  const imdbVotes = parseInt(movieDetail.imdbVotes.replace(/,/g, ''));

  let count = 0;
  const awards = movieDetail.Awards.split(' ').forEach((word) => {
    const value = parseInt(word);

    if(isNaN(value)){
      return;
    } else {
      count = count + value;
    }
  });

  console.log(count)

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