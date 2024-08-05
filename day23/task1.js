// brute force

// const findMedianSortedArrays = (nums1, nums2) => {
//     const mergeArray = [];
//     let i = 0; 
//     let k = 0;
//     let j = 0;

//     while(i < nums1.length && j < nums2.length){
//         if(nums1[i] < nums2[j]){
//             mergeArray[k++] = nums1[i++];
//         } else {
//             mergeArray[k++] = nums2[j++];
//         }
//     }

//     while(i < nums1.length){
//         mergeArray[k++] = nums1[i++];
//     }

//     while(j < nums2.length){
//         mergeArray[k++] = nums2[j++];
//     }

//     let sum = 0;
//     let n;

//     for(n = 0; n < mergeArray.length; n++){
//         sum += mergeArray[n];
//     }

//     return (sum / n);
// }

// let nums1 = [1,2];
// let nums2 = [3,4];

// const result = findMedianSortedArrays(nums1, nums2);

// console.log(result);


// optimized version
function findMedianSortedArrays(nums1, nums2){
        if (nums1.length > nums2.length) {
          [nums1, nums2] = [nums2, nums1];
        }

        let m = nums1.length;
        let n = nums2.length;
        let low = 0;
        let high = m;

        while (low <= high) {
          let partitionX = Math.floor((low + high) / 2);
          let partitionY = Math.floor((m + n + 1) / 2) - partitionX;

          let maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
          let minX = partitionX === m ? Infinity : nums1[partitionX];

          let maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
          let minY = partitionY === n ? Infinity : nums2[partitionY];

          if (maxX <= minY && maxY <= minX) {
            if ((m + n) % 2 === 0) {
              return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
              return Math.max(maxX, maxY);
            }
          } else if (maxX > minY) {
            high = partitionX - 1;
          } else {
            low = partitionX + 1;
          }
        }

        throw new Error("Input arrays are not sorted.");
}

// Example usage:
let nums1 = [1, 3];
let nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.0

nums1 = [1, 2];
nums2 = [3, 4];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.5
