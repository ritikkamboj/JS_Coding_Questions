// Array to check that if its palindrome or not 

// one is minimal approach , you can say leyman approach by using while loop 

function checkPalindrome(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] !== arr[right]) return false
        left++;
        right--;
    }
    return true
}

console.log(checkPalindrome([1, 2, 3, 2, 1]));

// second approach is kind of modern approach 

function checkPalindrome1(arr) {
    let reverse = [...arr].reverse();
    console.log(reverse);
    // have to change both arr in string so that we can compair them
    return arr.join() === reverse.join();
}

console.log(checkPalindrome1([1, 2, 3, 2, 1]));