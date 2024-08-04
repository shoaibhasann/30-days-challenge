function twoSum(nums, target){
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] == target) {
          return [i, j];
        }
      }
    }
}

// test cases
const num1 = [2,11,7,5];
const target1 = 9;
const result1 = twoSum(num1,target1);
console.log(result1);


const num2 = [3,3];
const target2 = 6;
const result2 = twoSum(num2, target2);
console.log(result2);


