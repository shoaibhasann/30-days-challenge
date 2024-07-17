let num = parseInt(prompt("Enter a integer"));

function checkEvenOrOdd(num){
    return (num % 2 == 0 ? "Even" : "Odd");
}

let res = checkEvenOrOdd(num);
console.log(res);