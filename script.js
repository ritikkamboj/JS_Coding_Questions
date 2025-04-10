// we have to count the occurence of each element , we can solve this with the help of object approach 
let freq = {};
function frequency(arr) {


    for (let item of arr) {
        freq[item] = (freq[item] || 0) + 1
    }
}

frequency([1, 2, 3, 2, 1]);
console.log(freq)


// using forEach loop 

function frequency1(arr) {
    let freq = {};
    arr.forEach((item) => {
        freq[item] = (freq[item] || 0) + 1
    })
    return freq
}

console.log(frequency1([1, 2, 2, 3, 1]))

// 3rd way is to use the reducer method 

let arrd = [1, 2, 3, 2, 1, 3];

let freq1 = arrd.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc
}, {})
console.log(freq1);


