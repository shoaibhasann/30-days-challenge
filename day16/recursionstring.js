// T5
function reverseString(str){
    // checking str is type of 'string' data type
    if(typeof str !== "string"){
        console.log("Invalid data type");
        return undefined;
    }

    // base case
    if(str.length <= 1) return str;

    return str[str.length - 1] + reverseString(str.substring(0, str.length - 1));
}

console.log(reverseString("Shoaib"));

// T6
function isPalindrome(str, start = 0, end = str.length - 1){
    // base case
    if(start >= end) return true;

    if(str[start] !== str[end]) return false;

    return isPalindrome(str, start + 1, end - 1);
}

console.log(isPalindrome("level")); // Output: true
console.log(isPalindrome("hello")); // Output: false