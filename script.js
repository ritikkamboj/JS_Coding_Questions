// Question to check if two strings are one edit away from each other 

function compare(str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;

    // Now if the string length difference gets more than 1 

    if (Math.abs(len1 - len2) > 1) return false;

    // Now we have to find out which string is greater and which is shorter 

    let [longer, shorter] = len1 > len2 ? [str1, str2] : [str2, str1];

    let i = 0, j = 0, foundDiff = false

    while (i < shorter.length && j < longer.length) {
        if (shorter[i] !== longer[j]) {
            if (foundDiff) return false;
            foundDiff = true;

            if (len1 === len2)
                i++

        }
        else {
            i++;
        }
        j++;

    }

    return true;
}

// console.log(compare("pale", "ple"));  // true
console.log(compare("pale", "ple"));  // true
console.log(compare("pale", "bale")); // true
console.log(compare("pale", "bake")); // false


// 2n solution is feels more easier as compared to ist one 

function compare1(str1, str2) {
    if (Math.abs(str1.length - str2.length) > 1) return false;

    let i = 0, j = 0, diff = 0;

    while (i < str1.length && j < str2.length) {
        if (str1[i] !== str2[j]) {
            if (++diff > 1) return false;
            if (str1.length > str2.length)
                i++;
            else if (str2.length > str1.length)
                j++;
            else {
                i++;
                j++;
            }

        }
        else {
            i++;
            j++;
        }
    }
    return true;
}



// console.log(compare("pale", "ple"));  // true
console.log(compare1("pale", "ple"));  // true
console.log(compare1("pale", "bale")); // true
console.log(compare1("pale", "bake")); // false



// 3rd way is to make separate functions for the calculations 


function compare2(str1, str2) {
    if (str1.length === str2.length)
        return oneReplace(str1, str2)
    else if (str1.length + 1 === str2.length) {
        return oneInsert(str1, str2)

    }
    else if (str1.length - 1 === str2.length) {
        return oneInsert(str2, str1)
    }
    else {
        return false;
    }
}


function oneReplace(str1, str2) {
    let foundDiff = false;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            if (foundDiff) return false;
            foundDiff = true;
        }
    }
    return true;
}

function oneInsert(str1, str2) {
    let i = 0, j = 0, foundDiff = false;

    while (i < str1.length && j < str2.length) {
        if (str1[i] !== str2[j]) {
            if (foundDiff) return false;
            foundDiff = true;

            if (str1.length === str2.length)
                i++;
        }
        else {
            i++
        }

        j++;
    }

    return true;

}


// console.log(compare("pale", "ple"));  // true
console.log(compare2("pale", "ple"));  // true
console.log(compare2("pale", "bale")); // true
console.log(compare2("pale", "bake")); // false
