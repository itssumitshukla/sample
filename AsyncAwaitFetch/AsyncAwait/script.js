let url = 'https://swapi.dev/api/people/1/';

// check axios
// function getPeople() {
//   let data = axios.get(url);
//   return data;
// }
// getPeople().then((res) => {
//   console.log(res.data);
// });

async function getPeople() {
  let res = await axios.get(url);
  console.log(res.data)
}

getPeople();