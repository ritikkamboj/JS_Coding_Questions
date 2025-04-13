// Finding the most frequent character in the string 

// Ist Method is using object to count the frequency 

function countFreq(str) {
    let freq = {};
    let maxCount = 0;
    let maxChar = '';


    for (let item of str) {
        freq[item] = (freq[item] || 0) + 1;

        if (freq[item] > maxCount) {
            maxCount = freq[item]

            maxChar = item;

        }
    }

    return maxChar;



}

console.log(countFreq('aabbbccccdd'));



// we are using map method and mostly approach remain same as above method 




function countFreq1(str) {
    let map = new Map();
    let maxCount = 0;
    let maxChar = '';

    for (let item of str) {
        map.set(item, (map.get(item) || 0) + 1)

        if (map.get(item) > maxCount) {
            maxCount = map.get(item);
            maxChar = item
        }
    }
    return maxChar;
}

console.log(countFreq1('aabbbccccdd'));


// 3rd method using split() and reduce method 

const userProfile = {
    id: 101,
    name: "CutiePie",
    age: 24,
    isOnline: true,
    hobbies: ["coding", "coffee", "memes"],
    address: {
        city: "Codeville",
        zip: "12345",
        country: "JS Land"
    },
}

console.log(Object.keys(userProfile))


// 3rd way is using reduce method ( we have to use two times reduce method )

function countFreq2(str) {
    let freq = str.split('').reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;

    }, {})

    console.log(freq)

    return Object.keys(freq).reduce((a, b) => freq[a] > freq[b] ? a : b);

}

console.log(countFreq2('aabbbccccdd'));
