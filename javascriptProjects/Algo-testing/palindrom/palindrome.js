function palindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

module.exports = palindrome;
