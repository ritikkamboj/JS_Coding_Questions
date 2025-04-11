// Task is to find the pair of elements which results in the given sum 
// 3 methods 

// 1.<ethod --> this method approach the elements from left to right 


function findingPairs(arr, target) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target)
                res.push([arr[i], arr[j]])
        }
    }

    return res;
}

console.log(findingPairs([1, 2, 3, 4, 5, 6], 6));

// 2. In Second Approach, we consider the previous elements from the current elements


function findingPairs1(arr, target) {
    let res = [];
    // let seen = new Set();
    let arr1 = []

    for (let item of arr) {
        let complement = target - item;

        // if (seen.has(complement))
        //     res.push([complement, item])
        if (arr1.includes(complement))
            res.push([complement, item])



        arr1.push(item)
    }
    return res;
}

console.log(findingPairs1([1, 2, 3, 4, 5, 6], 6))

// 3. Approach we consider moving the pointer from the both directions as per requirement 

function findingPairs2(arr, target) {
    arr.sort((a, b) => b - a)
    let left = 0;
    let right = arr.length - 1;
    let res = [];
    while (left < right) {
        if (arr[left] + arr[right] === target) {
            res.push([arr[left], arr[right]])
            left++;
            right--;
        }
        else if (arr[left] + arr[right] < target)
            left++;
        else if (arr[left] + arr[right] > target)
            right--;
    }

    return res;

}
console.log(findingPairs2([1, 2, 3, 4, 5, 6], 6))


// let arr3 = [1, 2, 3, 4, 5, 6];
// let arr5 = arr3.sort((a, b) => b - a);
// console.log(arr5, arr3)