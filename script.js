// Program to check that if the string contains another substring or not ?

// for this question we mostly have direct solutions

// 1. using includes method 

let str = "Hello sweetie";
// below way is case sensitive 
console.log(str.includes('sweet'));


// indexOf method 

console.log(str.indexOf('sweet') !== -1);

// search method which is use with regex 
// we make s=is case insensitive by using i 

console.log(str.search(/SWEET/i) !== -1);

// match method 
console.log(str.match(/sweet/) ? true : false); 
