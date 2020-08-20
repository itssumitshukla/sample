// let ingredients = ['Soup', 'Cheese', 'MtDew', 'something', 'food', 'stuff'];

// let gameboard = [
//   [4,32,8,4],
//   [64,8,32,2],
//   [8,32,16,4],
//   [2,8,4,2]
// ]

// for (let i = 0; i < gameboard.length; i++) {
//   console.log(gameboard[i]);
//   let row = gameboard[i];
//   for(let j = 0; j<row.length; j++){
//     console.log(`.......  ${row[j]}`)
//   }
// }

let jeo = {
  regPlay: 23,
  watSon: 40,
  trou: 33,
  batt: 100
};

for (let it in jeo){
  console.log(`${it} and ${jeo[it]}`);
}