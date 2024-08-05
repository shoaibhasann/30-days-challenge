function groupAnagrams(strs){
    const anagrams = new Map();

    for(let str of strs){
        const sortedStr = str.split("").sort().join("");

        if(anagrams.has(sortedStr)){
            anagrams.get(sortedStr).push(str);
        } else {
            anagrams.set(sortedStr, [str]);
        }
    }

    return (Array.from(anagrams.values()));

}

// Example usage:
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]