// finding the maximum element from the array 

const x = [5, 1, 8, 2, 19, 10];
const x1 = Math.max(...x);
console.log(x1)

let x2 = x[0];
for (let i = 0; i < x.length; i++) {
    if (x[i] > x2)
        x2 = x[i]

}

console.log(x2)

// reduce method is everywhere 

const x4 = x.reduce((acc, cur) => cur > acc ? cur : acc);
console.log(x4)

// by using sorting 

const arr = x.sort((a, b) => b - a)[0];
console.log("sortway", arr);