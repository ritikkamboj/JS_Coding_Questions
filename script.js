// Ways to solve the problem on how to reverse the array 

const x = [1, 2, 3, 4, 4, 5];

const x1 = x.reverse();
console.log(x1)

// above one also change the original array

// Now for loop array way 
const x3 = [1, 2, 3, 4, 5]
const x2 = []
for (let i = x3.length - 1; i >= 0; i--) {
    x2.push(x3[i]);
}
console.log("reverse the array ", x2);

// using temp variable way 

for (let i = 0; i < x3.length / 2; i++) {
    let temp = x3[i];
    x3[i] = x3[x3.length - 1 - i];
    x3[x3.length - 1 - i] = temp;
}

console.log(x3);