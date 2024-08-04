function isPalindrome(num){
    const reversedInt = parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num);

    if(num == 0) return true;

    if(reversedInt === num && Math.sign(num) === 1){
        return true;
    }

    return false;
    
}

console.log(isPalindrome(3223)); // output: true
console.log(isPalindrome(8384)); // output: false