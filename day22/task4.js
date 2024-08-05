const threeSum = (nums) => {
     nums.sort((a, b) => a - b); // Sort the array
     const result = [];
     const seen = new Map();

     for (let i = 0; i < nums.length - 2; i++) {
       if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

       let target = -nums[i];
       let map = new Map();

       for (let j = i + 1; j < nums.length; j++) {
         let complement = target - nums[j];

         if (map.has(complement)) {
           const triplet = [nums[i], complement, nums[j]];
           const key = triplet.toString();
           if (!seen.has(key)) {
             result.push(triplet);
             seen.set(key, true);
           }
         }
         map.set(nums[j], j);
       }
     }

     return result;
}