// Program to check if two strings are anagrams or not 
//  1. By using sort method 

function checkAnagrams(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// console.log('army', 'mary')
console.log(checkAnagrams('army', 'mary'))

// 2nd approach is bys using frequency approach(obj) and where obj approach comes we can apply Map approach too 

function checkAnagrams1(str1, str2) {

    if (str1.length !== str2.length) return;
    let freq = {};

    for (let item of str1) {
        freq[item] = (freq[item] || 0) + 1
    }

    for (let item of str2) {
        if (freq[item] === 0) return
        freq[item]--;
    }
    return true
}

console.log(checkAnagrams('army', 'mary'))


// 3rd way is using same approach above but wwith map function 

function checkAnagrams2(str1, str2) {
    if (str1.length !== str2.length) return false;

    let map = new Map();

    for (let item of str1) {
        map.set(item, (map.get(item) || 0) + 1)
    }
    for (let item of str2) {
        if (!map.get(item))
            return false
        map.set(item, map.get(item) - 1)
    }

    return true


}

console.log(checkAnagrams('army', 'mary'))
