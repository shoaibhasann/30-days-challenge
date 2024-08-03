// T8
function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n;

  function reverse(start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);

  console.log("Rotated array:", arr);
}

const array = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotateArray(array, k);


// T9
function mergeSortedArray(arr1,arr2){
    let result = [];
    let i = 0; // index for first sorted array
    let j = 0; // index for second sorted array
    let k = 0; // index for result array

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result[k++] = arr1[i++];
        } else {
            result[k++] = arr2[j++];
        }
    }

    while(i < arr1.length){
        result[k++] = arr1[i++];
    }

    while(j < arr2.length){
        result[k++] = arr2[j++];
 
    }

    console.log(result);

}

const a1 = [10,14,18,25];
const a2 = [3, 8, 22, 34];
mergeSortedArray(a1,a2);