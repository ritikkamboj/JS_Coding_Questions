// So we have to create the object which makes the data of frequency 

const arr = [1, 1, 2, 3, 3, 5, 5, 5, 8, 8, 8, 8];

const freq = {};

arr.find((item) => {
    freq[item] = (freq[item] || 0) + 1;
})

// we cam use find and filter method here , 

const array = Object.keys(freq);
console.log(array)
const x = array.find((item) => freq[item] === 1);
console.log(x);

// and if we want to find all the elements which comes only one times in the array 
const x1 = array.filter((item) => freq[item] === 1);
console.log(...x1);
