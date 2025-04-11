// finding the missing number from the array 

// Easy and smart way 
function findingMissing(arr) {
    let n = arr.length + 1;
    let actualSum = (n * (n + 1)) / 2;
    let expectedSum = arr.reduce((acc, cur) => acc + cur, 0);

    return actualSum - expectedSum;
}

console.log(findingMissing([1, 2, 4, 5]))

// 2. using set way to find out the missing number 

function missingNumber2(arr) {
    let n = arr.length + 1;
    // let seen = new Set(arr);
    let arr1 = [...arr];

    for (let i = 1; i <= n; i++) {
        if (!arr1.includes(i))
            return i;
    }
}

console.log(missingNumber2([1, 2, 4, 5]))


// 3rrd way , but we have to sort the array, which make sense also 


function findingMissing3(arr) {
    arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + 1 !== arr[i + 1])
            return arr[i] + 1
    }
}

console.log(findingMissing3([1, 2, 4, 5]))