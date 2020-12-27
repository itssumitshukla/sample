//API
const fetchData = async(searchTerm) =>{
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'ec3a8c4d',
      s: searchTerm,
    }
  });

  console.log(response.data);
};

const input = document.querySelector('input');

const debounce = (func, delay)=>{
  let timeoutId;
  return (...args)=>{
    if(timeoutId){
      clearTimeout(timeoutId);
    }
    setTimeout(()=>{
      func.apply(null, args)
    }, delay)
  };
};


const onInput = event=>{
  fetchData(event.target.value);
};

input.addEventListener('input', debounce(onInput, 500));