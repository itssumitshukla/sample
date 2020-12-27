//API
const fetchData = async(searchTerm) =>{
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'ec3a8c4d',
      s: searchTerm,
    }
  });

  console.log(response.data);
  console.log(response.data.Plot);
};

const input = document.querySelector('input');
input.addEventListener('input', (event)=>{
  fetchData(event.target.value);
});