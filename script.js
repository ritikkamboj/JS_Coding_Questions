// Program to find out the longest word in the sentence 

// 1. Started with Basic Loop 

function longestWord(str) {
    let longest = '';
    let words = str.split(' ');

    for (let word of words) {
        if (word.length > longest.length)
            longest = word


    }
    return longest;
}

console.log(longestWord('I am a Master Web Developer'))

// 2nd way is to use reduce method 

function longestWord1(str) {
    return str.split(' ').reduce((acc, cur) => cur.length > acc.length ? cur : acc);
}

console.log(longestWord1('I am a Master Web Developer'))

// 3. way is by sorting the array 

function longestWord2(str) {
    return str.split(' ').sort((a, b) => b.length - a.length)[0];
}

console.log(longestWord2('I am a Master Web Developer'))
