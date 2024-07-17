let num = parseFloat(prompt("Enter a number"));

function checkNumber(num){
    if(num > 0){
        console.log("Number is positive");
    } else if(num < 0){
        console.log("Number is negative");
    } else {
        console.log("Number is zero");
    }
}

checkNumber(num);