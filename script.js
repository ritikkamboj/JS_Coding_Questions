// Checking Pallindrome 

function checkPalindrome(arr) {
    let reverse = arr.split('').reverse().join('');
    if (arr === reverse)
        return true
    else
        return false
}

console.log(checkPalindrome('lol'));


function checkPalindrome1(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right])
            return false
        left++;
        right--;
    }

    return true

}

console.log(checkPalindrome('lol'));


// 3rd way 

function checkPalindrome2(str) {
    let len = str.length - 1;

    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i])
            return false;
    }
    return true;

}
console.log(checkPalindrome2('madam'))