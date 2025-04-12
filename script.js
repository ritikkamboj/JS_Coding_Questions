// Solutions to find the first non repeating alphabet from the string 

// 3 ways we have frequency and then we have map way and them we have compairing index way 

// string name is swiss

function firstRepeat(str) {
    let freq = {};

    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // console.log(freq);

    for (let key in freq) {
        // console.log(key, freq[key]);
        if (freq[key] === 1)
            return key

    }
}

console.log(firstRepeat('ritik'));


// 2nd way is using the map concept 

function firstRepeat1(str) {

    let map = new Map();

    for (let item in str) {
        map.set(item, (map.get(item) || 0) + 1)
    }

    for (let [key, num] of map.entries()) {
        if (num === 1)
            return key
    }
    return null;
}
console.log(firstRepeat('ritik'));


// 3. compairing the index way 

function firstRepeat2(str) {
    for (let item of str)
        if (str.indexOf(item) === str.lastIndexOf(item))
            return item

    return null
}

console.log(firstRepeat2('jritik')
)
