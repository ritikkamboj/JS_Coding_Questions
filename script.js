// Program to see if the string has unique characters or not 

// 1 . Ist Method we have to use set way to check the string 

function checkStr(str) {
    let seen = new Set();

    for (let item of str) {
        if (seen.has(item))
            return false;
        seen.add(item);
    }

    return true;
}

console.log(checkStr('abcdd'))

// 2nd way is one liner way of solving the issue 


function checkStr1(str) {

    const hasAllUnique = str => new Set(str).size === str.length;

    console.log(hasAllUnique(str));
}

checkStr1('abcdd')

// BY using two array method


function checkStr2(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j])
                return false
        }
    }
    return true
}

console.log(checkStr2('abcd'));

