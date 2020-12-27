//API
const fetchData = async() =>{
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'ec3a8c4d',
      s: 'avengers'
    }
  });

  console.log(response.data);
};

fetchData();