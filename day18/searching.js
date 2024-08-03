function linearSearch(arr, target){
    if(arr.length === 0) return -1;

    if(arr.length === 1){
        if(arr[0] === target){
            console.log("Target present at Index: ", 0);
            return;
        }
    }

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            console.log("Target present at Index: ", i);
            return;
        }
        continue;
    }

    console.log("Target is not present");
    return -1;
}

const arr1 = [10,20,30,40,50];
linearSearch(arr1,40); // Output: 3
linearSearch(arr1,100); // Output: -1

// T5
function binarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = Math.floor(left + (right - left) / 2);

        if(arr[mid] === target){
            console.log("Target present at index: ", mid);
            return;
        }

        if(arr[mid] > target){
            right = mid - 1;
        } else {
            left = mid + 1;
        }

    }

    console.log("Target not found in the array");
    return -1;
}

const arr2 = [10,20,30,40,50,60,70,80,90];
binarySearch(arr2, 50); // Output: 4