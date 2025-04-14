//  Compress a string means Run length encoding

// 1. simple array method 

function compressString(str) {

    let result = "";
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1])
            count++;
        else {
            result = result + str[i] + count;
            count = 1;
        }
    }

    return result;
}

console.log(compressString('aabbccddd'))


// 2.using method array , but inside working is same as above approach 

function compressString1(str) {
    let result = [];
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1])
            count++;
        else {
            result.push(str[i] + count);
            count = 1;
        }
    }

    return result.join('');
}

console.log(compressString1('aabbccddd'))
