// T3
function sumArray(arr, index = 0){

    if(arr.length == 1) return arr[0];

    // base case
    if(index == arr.length) return 0;

    // assumptions & self work
    return arr[index] + sumArray(arr,index + 1);
}

const arr = [1,2,3,4,50];
let sum = sumArray(arr);
console.log(sum); // Output: 60

// T4
function maximumElement(arr,index = 0){
    if(arr.length == 1) return arr[0];

    // base case
    if(index == arr.length - 1) return arr[index];

    // assumptions
    let maxElement = maximumElement(arr, index + 1);

    // self work
    if(maxElement > arr[index]){
        return maxElement;
    } else {
        return arr[index];
    }
}

const nums = [10,20,130,40,50];
const res = maximumElement(nums);
console.log(res); // Output: 130

