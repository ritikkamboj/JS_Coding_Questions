// checking if two strings are rotation of each other 

// 1. Ist approach is combining the str1 2 times and then checking str2 

function strChecking(str1, str2) {
    let combined = str1 + str1;
    if (combined.includes(str2))
        return true;
    return false
}

console.log(strChecking('ABCD', "CDAB")
)

// 2nd method is manial ROation and checking 

function strChecking1(str1, str2) {
    // let str = str1.split('');
    for (let i = 0; i < str1.length; i++) {
        let combine = str1.slice(i) + str1.slice(0, i);
        if (combine === str2)
            return true
    }
    return falsex
}
console.log(strChecking1('ABCD', "CDAB"));


// using Array way and psuh method 


function strChecking2(str1, str2) {
    let str = str1.split('');

    for (let i = 0; i < str1.length; i++) {
        str.push(str.shift());
        if (str.join('') === str2)
            return true
    }
    return false;

}

console.log(strChecking2('ABCD', "CDAB"));
