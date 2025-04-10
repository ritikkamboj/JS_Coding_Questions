// Writing a function  to rotate the array k times 


function rotate(arr, k) {
    k = k % arr.length;

    return [...arr.slice(-k), ...arr.slice(0, -k)]
}

const x = rotate([1, 2, 3, 4, 5], 2);
console.log(x);

// we have two more methods to solve the rotating the array 
// its by using splice and unshifts 


function rotate1(arr, k) {
    k = k % arr.length
    let removed = arr.splice(-k);
    console.log(removed)
    arr.unshift(...removed);
    return arr;
}

const newArr1 = rotate1([1, 2, 3, 4, 5], 2);
console.log(newArr1)

// 2 , its by using pop() and unshift() method 

function rotate3(arr, k) {
    k = k % arr.length

    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}

const newArr2 = rotate3([1, 2, 3, 4, 5], 2)
console.log(newArr2)