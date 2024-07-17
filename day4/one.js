// A1:T1
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// A1:T2
for(let i = 1; i <= 10; i++){
    console.log(5 * i);
}

// A2:T1
function sumOneToTen(){
    let sum = 0;
    let iterator = 1;
    while (iterator <= 10) {
      sum += iterator;
      iterator++;
    }
    console.log(sum);
}

// A2:T2
function tenToOne(){
    let iterator = 10;
    while(iterator > 0){
        console.log(iterator);
        iterator--;
    }
}

// A3:T1
function oneToFive(){
    let i = 1;
    do{
        console.log(i);
        i++;
    } while(i <= 5);
}
oneToFive();

// A3:T2
function factorial(num){
    let result = 1;
    let i = 1;

   do{
    result *= i;
    i++;
   } while(i <= num);

   console.log(result)

}

factorial(5);

function triangleStarPattern(row){
    for(let i = 1; i <= row; i++){
        let pattern = '';
        for(let j = 0; j < i; j++){
            pattern += "* ";
        }
        console.log(pattern);
    }
}

triangleStarPattern(4);

