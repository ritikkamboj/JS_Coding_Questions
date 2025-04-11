// finding the repeated elements in the array 

// In below solution if we gets repeated elements, we can furthur use Set too .
const arr = [1, 2, 3, 2, 3];

const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log(duplicates)

// calculating frequency way 

function frequency(arr) {
    let freq = {};
    let results = [];

    for (let item of arr) {
        freq[item] = (freq[item] || 0) + 1;
    }

    for (let key in freq) {
        if (freq[key] > 1)
            results.push(Number(key))
    }
    return results;
}

console.log(frequency(arr))

// 3.now using two sets method 

function frequency1(arr) {
    let seen = new Set();
    let duplicates = new Set();

    for (let item of arr) {
        if (seen.has(item))
            duplicates.add(item)
        else
            seen.add(item)
    }

    return Array.from(duplicates)
}
console.log(frequency1([1, 2, 3, 2, 3]))