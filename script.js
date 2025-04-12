// solutions to find the vowels in the string 

// 1. 
function vowelsCount(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char))
            count++;
    }
    return count;

}

console.log(vowelsCount('aeiou'));

// 2. BY using regex matching 

function vowelsCount1(str) {
    let match1 = str.match(/[aeiou]/gi);

    return match1.length;
}

console.log(vowelsCount1("hello Sweetie"))

// 3. By using reduce way 

function vowelsCount2(str) {
    let data = str.split('').reduce((acc, cur) => 'AEIOUaeiou'.includes(cur) ? acc + 1 : acc, 0);
    return data;
}

console.log(vowelsCount2('Hello Sweetie'))