// A1:T1
function checkEvenOdd(num){
    if(num > 0 || num < 0){
        if (num % 2 == 0) console.log("Number is even");
        else console.log("Number is odd");
    } else {
        console.log("Number is invalid or zero");
    }
}

// A1:T2
function square(num){
    return num * num;
}

// A2:T3
const max = function(num1, num2){
    if(num1 > num2){
        console.log(num1);
    } else {
        console.log(num2);
    }

}

// A2:T4
const stringCat = function(str1, str2){
    return str1 + str2;
}

// A3:T5
const sum = (num1, num2) => {
    return num1 + num2;
}

// A3:T6
const stringInclude = (str) => {
    return str.includes();
}

// A4:T7
function product(num1, num2 = 3){
    return num1 * num2;
}

// A4:T8
function greetings(name, age = 18){
    let message = `Hii ${name} and your age is ${age}`;
    console.log(message);
}

// A5:T9
function callTimes(fn,num){
    if(num <= 0){
        return;
    }
    fn();
    callTimes(fn, num - 1);
}

// A5:T10
function hod(fn1, fn2, value){
    const result = fn1(value);
    return fn2(result);
}





