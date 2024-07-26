// T1
function throwError(){
    throw new Error("Error");
}

try {
    throwError();
} catch (err) {
    console.error("Error: segmentation fault");
}

// T2
function divide(num1, num2){
    if(num2 == 0) throw new Error("Denominator is zero");

    return num1 / num2;

}

try {
    const result = divide(15,5);
    console.log(result);
} catch (error) {
    console.log(error);
}

