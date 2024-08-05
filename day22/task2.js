function longestUniqueSubstring(str) {
  let start = 0;
  let maxLength = 0;
  let longestStr = "";
  const charIndexMap = {};

  for (let end = 0; end < str.length; end++) {
    const currentChar = str[end];

    if (charIndexMap[currentChar] >= start) {
      start = charIndexMap[currentChar] + 1;
    }

    charIndexMap[currentChar] = end;

    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      longestStr = str.substring(start, end + 1);
    }
  }

  return longestStr;
}

const inputString = "abcabcbb";
const result = longestUniqueSubstring(inputString);
console.log("Longest unique substring:", result);
