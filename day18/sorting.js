// T1
function bubbleSort(arr){

    if(arr.length === 0) return arr;

    let n = arr.length;

    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            continue;
        }
    }

    return arr;
}

const arr1 = [12,45,8,85,9,10];
bubbleSort(arr1);
console.log(arr1);

// T2
function selectionSort(arr){
    let n = arr.length;

    for(let i = 0; i < n - 1; i++){
        let minIndex = i;
        for(let j = i + 1; j < n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(i !== minIndex){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

const arr2 = [55,21,66,9,100,34];
selectionSort(arr2);
console.log(arr2);

// T3
function quickSort(arr) {
  // base case
  if (arr.length <= 1) {
    return arr;
  }

  // choosing a pivot (using the middle element for simplicity)
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  // partitions: less than pivot, equal to pivot, greater than pivot
  const left = [];
  const right = [];
  const equal = [];

  // Partition the array into left, right, and equal arrays
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      equal.push(arr[i]);
    }
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
}

const arr3 = [10,30,2,56,99,43,100];
const sortedArray = quickSort(arr3);
console.log(sortedArray);
