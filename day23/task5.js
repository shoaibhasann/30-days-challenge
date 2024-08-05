function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const queue = [[beginWord, 1]]; // The queue holds pairs of [currentWord, level]
  const visited = new Set();
  visited.add(beginWord);

  while (queue.length > 0) {
    const [currentWord, level] = queue.shift();

    if (currentWord === endWord) {
      return level;
    }

    for (let i = 0; i < currentWord.length; i++) {
      const charArray = currentWord.split("");

      for (let charCode = 97; charCode <= 122; charCode++) {
        const newChar = String.fromCharCode(charCode);
        charArray[i] = newChar;
        const newWord = charArray.join("");

        if (wordSet.has(newWord) && !visited.has(newWord)) {
          visited.add(newWord);
          queue.push([newWord, level + 1]);
        }
      }
    }
  }

  return 0;
}

// Example usage:
const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log(ladderLength(beginWord, endWord, wordList)); // Output: 5
