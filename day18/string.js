// T6
function countOccurences(str){
    const count = {};

    for(let i = 0; i < str.length; i++){
        if(count[str[i]]){
            count[str[i]]++;
        } else {
            count[str[i]] = 1;
        }
    }

    for(const key in count){
        console.log(`Count of ${key}: ${count[key]}`);
    }
}

countOccurences("hello");


// T6
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
