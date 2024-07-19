// A1:T1
const nums = [1,2,3,4,5];
console.log(nums);

// A1:T2
let first = nums[0];
let last = nums[nums.length - 1];
console.log(first);
console.log(last);

// A2:T3
nums.push(6);
console.log(nums); // output: [ 1, 2, 3, 4, 5, 6 ]

// A2:T4
nums.pop();
console.log(nums); // output: [ 1, 2, 3, 4, 5 ]

// A2:T5
nums.shift();
console.log(nums); // output: [ 2, 3, 4, 5 ]

// A2:T6
nums.unshift(10);
console.log(nums); // output: [ 10, 2, 3, 4, 5 ]

// A3:T7
const newArr = [10,20,30,40,50];
const doubleNums = newArr.map((e) => {
    return 2 * e;
});
console.log(doubleNums);

// A3:T8
const nums2 = [11,22,33,44,55,66];
const evenNums = nums2.filter((e) => e % 2 == 0);
console.log(evenNums);

// A3:T9
const cartItemsPrice = [100,200,300,400,500];
const total = cartItemsPrice.reduce((sum, current) => sum + current, 0);
console.log(total); // output: 1500

// A4:T10
const avengers = ["Iron Man", "Thor", "Hulk", "Captain America"];
for(let i = 0; i < avengers.length; i++){
    console.log(avengers[i]);
}

// A4:T11
const dcHeros = ["Batman", "Flash", "Superman"];
dcHeros.forEach((hero) => {
    console.log(hero);
})

// A5:T12
const matrix = [[1,2,3], [4,5,6], [7,8,9]];
console.log(matrix);

// acessing element at 2nd row and 3 column
console.log(matrix[1][2]); // output: 6