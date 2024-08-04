function reverseInteger(num){
    if(num == 0) return 0;

    let isNegative = num < 0;

    if(isNegative){
        num = -num;
    }

    let reversed = 0;

    while(num > 0){
      // extract the last digit
      const digit = num % 10;
      // remove the last digit
      num = Math.floor(num / 10);

      // Check for overflow before multiplying by 10
      if (reversed > (Math.pow(2, 31) - 1) / 10) {
        return 0; // Return 0 in case of overflow
      }

      reversed = reversed * 10 + digit;
    }

    if(isNegative){
        reversed = -reversed;
    }

    // checking reversed num is not in the range of 32 bit
    if(reversed > (Math.pow(2,31) - 1) || reversed < -(Math.pow(2,31))){
        return 0;
    }

    return reversed;

}

// test cases
console.log(reverseInteger(321));
console.log(reverseInteger(-123));
console.log(reverseInteger(120));

