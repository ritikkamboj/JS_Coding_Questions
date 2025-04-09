// Merging and Sorting the array 

const x1 = [343, 45, 45, 345, 345, 6];
const x2 = [23, 98, 11, 22, 10];

const sortedArray = [...x1, ...x2].sort((a, b) => a - b);
console.log(sortedArray)

// two more method one is concat and sort and other one is reduce and sort

// 1. using concat and sort 

const sortedArray1 = x1.concat(x2).sort((a, b) => a - b);
console.log("concat and sort", sortedArray1);

//2 . using reduce and sort 

const meregedArr = [x1, x2].reduce((acc, cur) => acc.concat(cur), []);
const sorted = meregedArr.sort((a, b) => a - b);
console.log("using reduce and sort", sorted)