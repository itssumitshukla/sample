//Solution 1
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

//Solution 2
function reverseString(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
}

module.exports = reverseString;
