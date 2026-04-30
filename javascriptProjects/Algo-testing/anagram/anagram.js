function anagram(str1, str2) {
  const aCharMap = buildCharMap(str1);
  const bCharMap = buildCharMap(str2);

  if ((Object.keys(aCharMap).length !== Object, keys(bCharMap).length)) {
    return false;
  }
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

anagram("hello", "world");
