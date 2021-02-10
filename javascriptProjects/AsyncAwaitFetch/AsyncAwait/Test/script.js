let url1 = 'https://swapi.dev/api/people/1/';
let url2 = 'https://swapi.dev/api/people/2/';
let url3 = 'https://swapi.dev/api/people/3/';
// check axios
// function getPeople() {
//   let data = axios.get(url1);
//   return data;
// }
// getPeople().then((res) => {
//   console.log(res.data);
// });

// async function getPeople() {
//   try {
//     let res = await axios.get(url1);
//     console.log(res.data)
//   } catch (e) {
//     console.log('IN CATCH: ', e)
//   }
// }

// getPeople();

//Testing Sequential Reuests
// async function getPeople() {
//   let res1 = await axios.get(url1);
//   let res2 = await axios.get(url2);
//   let res3 = await axios.get(url3);
//   console.log(res1.data.name)
//   console.log(res2.data.name)
//   console.log(res3.data.name)
// }
// getPeople();


//Testing parallel request
async function getPeople() {
  let res1 = await axios.get(url1);
  let res2 = await axios.get(url2);
  let res3 = await axios.get(url3);
  let tt1 = await res1;
  let tt2 = await res2;
  let tt3 = await res3;
  console.log(tt1.data.name)
  console.log(tt2.data.name)
  console.log(tt3.data.name)
}

getPeople();