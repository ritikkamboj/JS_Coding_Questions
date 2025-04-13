// 1 . Removing all the duplicates characters from string 
// 1/ first approach is by using set method 

function removeDuplicates(str) {

    let seen = new Set();
    result = ""

    for (let item of str) {
        if (!seen.has(item)) {
            seen.add(item);
            result += item;

        }
    }
    return result;
}

console.log(removeDuplicates('aabbcccddd'))

// 2. using built in methods like split(), indexOF and filter and join()

function removeDuplicates1(str) {
    return str.split('').filter((num, index, arr) => arr.indexOf(num) === index).join('');
}

console.log(removeDuplicates('aabbcccddd'))
// console.log(removeDuplicates1(''))

// 3rd way using map Method 

function removeDuplicates2(str) {
    let map = new Map();
    let result = ''

    for (let item of str) {
        if (!map.has(item)) {
            map.set(item, true)
            result += item;
        }
    }
    return result;



}

console.log(removeDuplicates2('aabbcccddd'))
