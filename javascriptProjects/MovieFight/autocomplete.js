const createAutoComplete = ({root, renderOption, onOptionSelect, inputValue}) => {
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

  const input = root.querySelector('input');
  const dropdown = root.querySelector('.dropdown');
  const resultWrapper = root.querySelector('.results');


  const onInput = async (event) => {
    const movies = await fetchData(event.target.value);

    if (!movies.length) {
      dropdown.classList.remove('is-active');
    }

    resultWrapper.innerHTML = '';
    dropdown.classList.add("is-active");
    for (let movie of movies) {
      let option = document.createElement('a');

      option.classList.add('dropdown-item');
      option.innerHTML = renderOption(movie);

      option.addEventListener('click', () => {
        dropdown.classList.remove('is-active');
        input.value = inputValue(movie);

        onOptionSelect(movie);
      });

      resultWrapper.appendChild(option);
    }
  };

  input.addEventListener('input', debounce(onInput, 500));

  //global event listner

  document.addEventListener('click', (e) => {
    if (!root.contains(e.target)) {
      dropdown.classList.remove('is-active');
    }
  });
};