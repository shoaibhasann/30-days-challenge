// T1
function factorial(num){
    // base case
    if(num == 0 || num == 1) return 1;

    // assumptions & self work
    return num * factorial(num - 1);
}

let recursiveFactorial = factorial(5);
console.log(recursiveFactorial); // Output: 120

// T2
function fibonacci(n){
    if(n <= 0){
        console.log("Invalid Number");
        return -1;
    }
    // base case
    if(n == 1) return 0;
    if(n == 2) return 1;
    
    // assumtions & self work
    return fibonacci(n - 2) + fibonacci(n-1);
}

let tenthFibo = fibonacci(10);
console.log(tenthFibo); // Output: 34