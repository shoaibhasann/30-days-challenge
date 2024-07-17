function add(num1, num2){
    let result = num1 + num2;
    console.log(result);
}

function subtract(num1, num2){
    let result = num1 - num2;
    console.log(result);
}

function mutiply(num1, num2){
    let result = num1 * num2;
    console.log(result);
}

function divide(num1, num2){
    if(num2 !== 0){
        let result = num1 / num2;
        console.log(result);
    } else{
        console.error("Denominator is zero");
    }
}

function remain(num1, num2){
    if(num1 < num2 ){
        console.log(num1);
        return;
    } else {
        console.log(num1 % num2);
    }
}

let prevYear = 2023;
prevYear += 2;
console.log(prevYear); // output: 2025

prevYear -= 2; 
console.log(prevYear); // output: 2023



const num5 = -100;
// ternary operator
num5 > 0 ? console.log("positive") : console.log("negative");



