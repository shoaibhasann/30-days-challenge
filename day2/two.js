function is2024(){
    const date = new Date();
    if(date.getFullYear() === 2024) return true;
    return false;
}

console.log(is2024()); // output: true


function isGenz(year){
    if(year >= 1995 && year <= 2005){
        console.log("you're genz!");
    } else {
        console.log("you're not genz");
    }
}

isGenz(1998); // output: you're genz!

function logIn(username, email){
    if(username || email){
        console.log("Enter your password");
    } else {
        console.log("find your account");
    }
}

logIn("shoaib.hasann"); // output: Enter your password


function isOdd(num){
    if(num % 2 != 0){
        console.log(`${num} is odd`);
    } else{
         console.log(`${num} is not odd`);
    }
}

isOdd(4); // output: 4 is not odd