// T7
function recusiveBinarySearch(arr, target, left = 0, right = arr.length - 1){
    // base case
    if(left > right) return -1;

    // calculating middle index
    let mid = Math.floor(left + (right - left) / 2);

    if(arr[mid] == target) return mid;

    if(arr[mid] > target){
        // search in left part of the middle index
        return recusiveBinarySearch(arr, target, left, mid - 1);
    } else {
        // search in right part of the middle index
        return recusiveBinarySearch(arr, target, mid + 1, right);
    }

}

const nums = [10,20,30,50,60,70];
console.log(recusiveBinarySearch(nums,50)); // Output: 3

// T8
function countOccurences(arr, target, index = 0){
    // base case
    if(index == arr.length) return 0;

    let count = arr[index] == target ? 1 : 0;

    let total = count + countOccurences(arr, target, index + 1);

    return index === 0 && total === 0 ? -1 : total;
}

const arr = [2,43,5,0,28,32,2,5];

console.log(countOccurences(arr,2)); // Output: 2