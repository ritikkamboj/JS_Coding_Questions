// using set and sorting approach to find the second largest number 

function secondLarge(arr) {
    const newArr = [...new Set(arr)].sort((a, b) => b - a);
    return newArr[1];

}

console.log(secondLarge([10, 5, 20, 8]))


// second solution is yet to be understand and then we can able to solved it 