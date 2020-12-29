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
  console.log(response.data);
};